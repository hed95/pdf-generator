import TYPE from '../constant/TYPE';
import {provide} from 'inversify-binding-decorators';
import {inject} from 'inversify';
import AppConfig from '../interfaces/AppConfig';
import * as querystring from 'querystring';
import InternalServerError from '../error/InternalServerError';
import axiosInstance from '../util/axios';
import HttpStatus from 'http-status-codes';

@provide(TYPE.KeycloakService)
export class KeycloakService {
    private readonly keycloakUrl: string;

    constructor(@inject(TYPE.AppConfig) private readonly appConfig: AppConfig) {
        const keycloak: any = appConfig.keycloak;
        this.keycloakUrl = keycloak.protocol.concat(keycloak.url);
    }

    public async getAccessToken(): Promise<string> {
        const data: string = querystring.stringify({
            grant_type: 'client_credentials',
        });
        const tokenResponse = await axiosInstance({
            method: 'POST',
            url: `${this.keycloakUrl}/realms/${this.appConfig.keycloak.realm}/protocol/openid-connect/token`,
            auth: {
                username: this.appConfig.keycloak.client.id,
                password: this.appConfig.keycloak.client.secret,
            },
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data,
        });
        if (tokenResponse.status !== HttpStatus.OK) {
            throw new InternalServerError('Failed to get access token ');
        }
        return Promise.resolve(tokenResponse.data.access_token);
    }
}