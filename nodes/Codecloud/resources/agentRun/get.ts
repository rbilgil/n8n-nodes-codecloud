import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAgentRunGet = {
	operation: ['get'],
	resource: ['agentRun'],
};

export const agentRunGetDescription: INodeProperties[] = [
	{
		displayName: 'Run ID',
		name: 'runId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForAgentRunGet,
		},
		description: 'The ID of the agent run to retrieve',
	},
];
