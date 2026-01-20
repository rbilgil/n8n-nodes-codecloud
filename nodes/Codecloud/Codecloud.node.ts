import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { agentRunDescription } from './resources/agentRun';

export class Codecloud implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Codecloud',
		name: 'codecloud',
		icon: { light: 'file:codecloud.svg', dark: 'file:codecloud.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Run AI coding agents in the cloud with Codecloud',
		defaults: {
			name: 'Codecloud',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'codecloudApi', required: true }],
		requestDefaults: {
			baseURL: 'https://codecloud.dev/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Agent Run',
						value: 'agentRun',
					},
				],
				default: 'agentRun',
			},
			...agentRunDescription,
		],
	};
}
