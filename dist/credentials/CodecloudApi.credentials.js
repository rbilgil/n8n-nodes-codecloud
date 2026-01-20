"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodecloudApi = void 0;
class CodecloudApi {
    constructor() {
        this.name = 'codecloudApi';
        this.displayName = 'Codecloud API';
        this.documentationUrl = 'https://codecloud.dev/docs';
        this.icon = { light: 'file:codecloud.svg', dark: 'file:codecloud.dark.svg' };
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: '',
                description: 'Your Codecloud API key. Get it from your Codecloud dashboard. Keys start with "cc_".',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '=Bearer {{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://codecloud.dev/api/v1',
                url: '/agents',
                method: 'GET',
            },
        };
    }
}
exports.CodecloudApi = CodecloudApi;
//# sourceMappingURL=CodecloudApi.credentials.js.map