import {provide} from 'inversify-binding-decorators';
import TYPE from '../constant/TYPE';
import {PdfGenerator} from './PdfGenerator';
import util from 'formiojs/utils';
import puppeteer from 'puppeteer';
import logger from '../util/logger';
import merge from 'easy-pdf-merge';
import _ from 'lodash';
import {inject} from 'inversify';
import AppConfig from '../interfaces/AppConfig';
import {FormTemplateResolver} from './FormTemplateResolver';
import InternalServerError from '../error/InternalServerError';
import {S3Service} from '../service/S3Service';

@provide(TYPE.FormWizardPdfGenerator)
export class FormWizardPdfGenerator extends PdfGenerator {

    constructor(@inject(TYPE.AppConfig) appConfig: AppConfig,
                @inject(TYPE.FormTemplateResolver) formTemplateResolver: FormTemplateResolver,
                @inject(TYPE.S3Service) s3Service: S3Service) {
        super(appConfig, formTemplateResolver, s3Service);

    }

    public async generatePdf(schema: any, formSubmission: any): Promise<{
        fileLocation: string,
        message: string,
    }> {
        const formName = schema.name;

        const mergeMultiplePDF = (files: string[], finalFileName: string): Promise<string> => {
            return new Promise((resolve, reject) => {
                const location: string = `/tmp/${finalFileName}`;
                merge(files, location, (err) => {
                    if (err) {
                        logger.error('PDF merge failed', err);
                        reject(err);
                    }
                    resolve(location);
                });
            });
        };
        const panels: any[] = util.searchComponents(schema.components, {
            type: 'panel',
        });

        const browser = await puppeteer.launch({
            headless: true,
            args: ['--disable-web-security'],
        });
        let pdfFiles = [];
        let fileLocation: string = null;
        const finalPdfName = this.finalPdfName(formSubmission, schema);

        try {
            pdfFiles = await Promise.all(_.map(panels, async (panel, index) => {
                panel.conditional = {eq: 'yes', show: 'true', when: null};
                const newSchema: any = {
                    name: schema.name,
                    display: 'form',
                    title: schema.title,
                    path: schema.path,
                    components: [panel],
                };
                const htmlContent = await this.formTemplateResolver
                    .renderContentAsHtml(newSchema, formSubmission);

                const page = await browser.newPage();

                const tempFileName = `/tmp/${finalPdfName}-${index}`;

                const htmlFileName = `${tempFileName}.html`;
                const result = await this.writeFilePromise(htmlFileName, htmlContent);

                logger.debug(result);

                await page.goto(`file://${htmlFileName}`,
                    {waitUntil: ['networkidle0', 'load', 'domcontentloaded']});

                await page.pdf({path: `${tempFileName}.pdf`, format: 'A4'});
                logger.info(`Generated pdf for ${finalPdfName}`);

                await this.deleteFile(htmlFileName);
                if (page) {
                    try {
                        await page.close();
                    } catch (e) {
                        logger.warn('Unable to close page', e);
                    }
                }
                return `${tempFileName}.pdf`;
            }));
            logger.debug(`PDF files`, pdfFiles);

            logger.info(`Performing final merge for ${finalPdfName}`);
            fileLocation = await mergeMultiplePDF(pdfFiles, formName);
            logger.info(`Merge completed for ${finalPdfName}`);

            const s3Location = await this.s3Service.uploadFile(this.bucketName, fileLocation,
                `${finalPdfName}.pdf`, this.pdfMetaData);
            logger.debug(`S3 etag ${s3Location}`);

            return {
                fileLocation: s3Location,
                message: `Form ${formName} successfully created and uploaded to file store`,
            };
        } catch (e) {
            logger.error('An exception occurred ', e);
            throw new InternalServerError(e);

        } finally {
            if (browser !== null) {
                await browser.close();
                logger.debug('Browser closed');
            }
            if (pdfFiles.length !== 0) {
                _.forEach(pdfFiles, async (file) => {
                    await this.deleteFile(file);
                });
            }
            if (fileLocation) {
                await this.deleteFile(fileLocation);
            }
        }
    }
}