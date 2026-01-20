import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CodecloudApi implements ICredentialType {
	name = 'codecloudApi';

	displayName = 'Codecloud API';

	documentationUrl = 'https://codecloud.dev/docs';

	icon = { light: 'file:codecloud.svg', dark: 'file:codecloud.dark.svg' } as const;

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description:
				'Your Codecloud API key. Get it from your Codecloud dashboard. Keys start with "cc_".',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://codecloud.dev/api/v1',
			url: '/agents',
			method: 'GET',
		},
	};
}
