export const basicForm: any = {
    "type": "form",
    "components": [
        {
            "label": "Text Field",
            "widget": {
                "type": "input"
            },
            "tableView": true,
            "inputFormat": "plain",
            "validate": {
                "required": true
            },
            "key": "textField",
            "type": "textfield",
            "input": true
        },
        {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "input": true,
            "tableView": false
        }
    ],
    "title": "testABC",
    "path": "testabc",
    "display": "form",
    "name": "testAbc",
    "submissionAccess": [],
    "access": []
};

export const numberForm: any = {
    "type": "form",
    "components": [{
        "autofocus": false,
        "input": true,
        "tableView": true,
        "inputType": "number",
        "label": "Number",
        "key": "number",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "defaultValue": "",
        "protected": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "validate": {
            "required": false,
            "min": "",
            "max": "",
            "step": "any",
            "integer": "",
            "multiple": "",
            "custom": ""
        },
        "type": "number",
        "labelPosition": "top",
        "tags": [],
        "conditional": {"show": "", "when": null, "eq": ""},
        "properties": {}
    }, {
        "type": "button",
        "label": "Submit",
        "key": "submit",
        "disableOnInvalid": true,
        "theme": "primary",
        "input": true,
        "tableView": true,
        "autofocus": false,
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": false,
        "action": "submit"
    }],
    "revisions": "",
    "display": "form",
    "title": "APPLES",
    "name": "apples",
    "path": "apples",
    "access": [],
    "submissionAccess": [],

};

export const wizardForm: any = {
    "id": "765a46ef-0f64-443f-a2e3-27c13a77bccb",
    "name": "wizard",
    "path": "wizard",
    "title": "wizard",
    "display": "wizard",
    "components": [{
        "id": "e2gx7kf",
        "key": "page1",
        "path": "page1",
        "tree": false,
        "type": "panel",
        "input": false,
        "label": "Page 1",
        "theme": "default",
        "title": "Page 1",
        "hidden": false,
        "prefix": "",
        "suffix": "",
        "unique": false,
        "widget": null,
        "dbIndex": false,
        "overlay": {"top": "", "left": "", "style": "", "width": "", "height": ""},
        "tooltip": "",
        "disabled": false,
        "multiple": false,
        "tabindex": "",
        "validate": {"custom": "", "required": false, "customPrivate": false},
        "autofocus": false,
        "encrypted": false,
        "hideLabel": false,
        "protected": false,
        "refreshOn": "",
        "tableView": false,
        "breadcrumb": "default",
        "components": [{
            "id": "em5of79",
            "key": "textField",
            "case": "",
            "mask": false,
            "tags": [],
            "type": "textfield",
            "input": true,
            "label": "Text Field",
            "logic": [],
            "hidden": false,
            "prefix": "",
            "suffix": "",
            "unique": false,
            "widget": {"type": "input"},
            "dbIndex": false,
            "overlay": {"top": "", "left": "", "style": "", "width": "", "height": ""},
            "tooltip": "",
            "disabled": false,
            "multiple": false,
            "tabindex": "",
            "validate": {
                "json": "",
                "custom": "",
                "pattern": "",
                "required": false,
                "maxLength": "",
                "minLength": "",
                "customMessage": "",
                "customPrivate": false
            },
            "autofocus": false,
            "encrypted": false,
            "hideLabel": false,
            "inputMask": "",
            "inputType": "text",
            "protected": false,
            "refreshOn": "",
            "tableView": true,
            "attributes": {},
            "errorLabel": "",
            "persistent": true,
            "properties": {},
            "validateOn": "change",
            "clearOnHide": true,
            "conditional": {"eq": "", "json": "", "show": "", "when": null},
            "customClass": "",
            "description": "",
            "inputFormat": "plain",
            "placeholder": "",
            "defaultValue": "",
            "alwaysEnabled": false,
            "labelPosition": "top",
            "showCharCount": false,
            "showWordCount": false,
            "calculateValue": "",
            "customConditional": "",
            "allowMultipleMasks": false,
            "customDefaultValue": "",
            "allowCalculateOverride": false
        }],
        "errorLabel": "",
        "persistent": false,
        "properties": {},
        "validateOn": "change",
        "clearOnHide": false,
        "conditional": {"eq": "", "show": null, "when": null},
        "customClass": "",
        "description": "",
        "placeholder": "",
        "defaultValue": null,
        "alwaysEnabled": false,
        "labelPosition": "top",
        "showCharCount": false,
        "showWordCount": false,
        "calculateValue": "",
        "allowMultipleMasks": false,
        "customDefaultValue": "",
        "allowCalculateOverride": false
    }, {
        "id": "egh8q3s",
        "key": "page2",
        "path": "page2",
        "tree": false,
        "type": "panel",
        "input": false,
        "label": "Page 2",
        "theme": "default",
        "title": "Page 2",
        "hidden": false,
        "prefix": "",
        "suffix": "",
        "unique": false,
        "widget": null,
        "dbIndex": false,
        "overlay": {"top": "", "left": "", "style": "", "width": "", "height": ""},
        "tooltip": "",
        "disabled": false,
        "multiple": false,
        "tabindex": "",
        "validate": {"custom": "", "required": false, "customPrivate": false},
        "autofocus": false,
        "encrypted": false,
        "hideLabel": false,
        "protected": false,
        "refreshOn": "",
        "tableView": false,
        "breadcrumb": "default",
        "components": [{
            "id": "enqxplc",
            "key": "textField1",
            "case": "",
            "mask": false,
            "tags": [],
            "type": "textfield",
            "input": true,
            "label": "Text Field",
            "logic": [],
            "hidden": false,
            "prefix": "",
            "suffix": "",
            "unique": false,
            "widget": {"type": "input"},
            "dbIndex": false,
            "overlay": {"top": "", "left": "", "style": "", "width": "", "height": ""},
            "tooltip": "",
            "disabled": false,
            "multiple": false,
            "tabindex": "",
            "validate": {
                "json": "",
                "custom": "",
                "pattern": "",
                "required": false,
                "maxLength": "",
                "minLength": "",
                "customMessage": "",
                "customPrivate": false
            },
            "autofocus": false,
            "encrypted": false,
            "hideLabel": false,
            "inputMask": "",
            "inputType": "text",
            "protected": false,
            "refreshOn": "",
            "tableView": true,
            "attributes": {},
            "errorLabel": "",
            "persistent": true,
            "properties": {},
            "validateOn": "change",
            "clearOnHide": true,
            "conditional": {"eq": "", "json": "", "show": "", "when": ""},
            "customClass": "",
            "description": "",
            "inputFormat": "plain",
            "placeholder": "",
            "defaultValue": "",
            "alwaysEnabled": false,
            "labelPosition": "top",
            "showCharCount": false,
            "showWordCount": false,
            "calculateValue": "",
            "customConditional": "",
            "allowMultipleMasks": false,
            "customDefaultValue": "",
            "allowCalculateOverride": false
        }],
        "errorLabel": "",
        "persistent": false,
        "properties": {},
        "validateOn": "change",
        "clearOnHide": false,
        "conditional": {"eq": "", "show": null, "when": null},
        "customClass": "",
        "description": "",
        "placeholder": "",
        "defaultValue": null,
        "alwaysEnabled": false,
        "labelPosition": "top",
        "showCharCount": false,
        "showWordCount": false,
        "calculateValue": "",
        "allowMultipleMasks": false,
        "customDefaultValue": "",
        "allowCalculateOverride": false
    }],
    "access": [{
        "id": "efa45f38-be38-46b2-a28e-6d53f8bbe1fd",
        "name": "anonymous",
        "description": "Default role that allows anyone to see a form",
        "active": true
    }],
    "versionId": "3e02b4a5-6d81-48da-83a2-5cd948c0b61c",
    "createdOn": "2019-08-16T10:08:42.631Z",
    "updatedOn": "2019-08-16T10:08:42.631Z",
    "links": [{
        "rel": "self",
        "title": "Self",
        "method": "GET",
        "href": "/forms/765a46ef-0f64-443f-a2e3-27c13a77bccb"
    }, {
        "rel": "allVersions",
        "title": "Show all versions",
        "method": "GET",
        "href": "/forms/765a46ef-0f64-443f-a2e3-27c13a77bccb/versions"
    }, {
        "rel": "comments",
        "title": "Show all comments",
        "method": "GET",
        "href": "/forms/765a46ef-0f64-443f-a2e3-27c13a77bccb/comments"
    }, {
        "rel": "create-comment",
        "title": "Add a comment",
        "method": "POST",
        "href": "/forms/765a46ef-0f64-443f-a2e3-27c13a77bccb/comments"
    }, {
        "rel": "update",
        "title": "Update form",
        "method": "PUT",
        "href": "/forms/765a46ef-0f64-443f-a2e3-27c13a77bccb"
    }, {
        "rel": "delete",
        "title": "Delete form",
        "method": "DELETE",
        "href": "/forms/765a46ef-0f64-443f-a2e3-27c13a77bccb"
    }]
}


export const emailForm: any = {
    "type": "form",
    "components": [{
        "autofocus": false,
        "input": true,
        "tableView": true,
        "inputType": "email",
        "label": "Email",
        "key": "email",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "defaultValue": "",
        "protected": false,
        "unique": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "kickbox": {"enabled": false},
        "type": "email",
        "labelPosition": "top",
        "inputFormat": "plain",
        "tags": [],
        "conditional": {"show": "", "when": null, "eq": ""},
        "properties": {}
    }, {
        "type": "button",
        "label": "Submit",
        "key": "submit",
        "disableOnInvalid": true,
        "theme": "primary",
        "input": true,
        "tableView": true,
        "autofocus": false,
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": false,
        "action": "submit"
    }],
    "display": "form",
    "title": "APPLES",
    "name": "apples",
    "path": "apples",
    "access": [],
    "submissionAccess": []
};

export const dataGridForm: any = {
    "type": "form",
    "components": [{
        "autofocus": false,
        "input": true,
        "tree": true,
        "components": [{
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Text",
            "key": "field",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
                "required": true,
                "minLength": "",
                "maxLength": "",
                "pattern": "",
                "custom": "",
                "customPrivate": false
            },
            "conditional": {"show": "", "when": null, "eq": ""},
            "type": "textfield",
            "inDataGrid": true,
            "labelPosition": "top",
            "inputFormat": "plain",
            "tags": [],
            "properties": {},
            "lockKey": true
        }],
        "tableView": true,
        "label": "Data Grid",
        "key": "data",
        "protected": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "type": "datagrid",
        "addAnotherPosition": "bottom",
        "tags": [],
        "conditional": {"show": "", "when": null, "eq": ""},
        "properties": {},
        "lockKey": true
    }, {
        "type": "button",
        "label": "Submit",
        "key": "submit",
        "disableOnInvalid": true,
        "theme": "primary",
        "input": true,
        "tableView": true,
        "autofocus": false,
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": false,
        "action": "submit"
    }],
    "display": "form",
    "title": "APPLES",
    "name": "apples",
    "path": "apples",
    "access": [],
    "submissionAccess": [],
};