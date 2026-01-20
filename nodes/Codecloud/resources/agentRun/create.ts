import type { INodeProperties } from "n8n-workflow";

const showOnlyForAgentRunCreate = {
	operation: ["create"],
	resource: ["agentRun"],
};

export const agentRunCreateDescription: INodeProperties[] = [
	{
		displayName: "Repository",
		name: "repo",
		type: "string",
		default: "",
		required: true,
		displayOptions: {
			show: showOnlyForAgentRunCreate,
		},
		placeholder: "owner/repo",
		description: 'GitHub repository in format "owner/repo"',
		routing: {
			send: {
				type: "body",
				property: "repo",
			},
		},
	},
	{
		displayName: "Prompt",
		name: "prompt",
		type: "string",
		typeOptions: {
			rows: 6,
		},
		default: "",
		required: true,
		displayOptions: {
			show: showOnlyForAgentRunCreate,
		},
		description: "Task description for the AI agent (max 100,000 characters)",
		routing: {
			send: {
				type: "body",
				property: "prompt",
			},
		},
	},
	{
		displayName: "Model",
		name: "model",
		type: "string",
		default: "claude-sonnet-4-5",
		required: true,
		displayOptions: {
			show: showOnlyForAgentRunCreate,
		},
		placeholder: "claude-sonnet-4-5",
		description:
			"AI model to use. Check https://models.dev/ for available models",
		routing: {
			send: {
				type: "body",
				property: "model",
			},
		},
	},
	{
		displayName: "Provider",
		name: "provider",
		type: "options",
		default: "anthropic",
		required: true,
		displayOptions: {
			show: showOnlyForAgentRunCreate,
		},
		options: [
			{
				name: "Anthropic",
				value: "anthropic",
			},
			{
				name: "Cerebras",
				value: "cerebras",
			},
			{
				name: "Cohere",
				value: "cohere",
			},
			{
				name: "DeepSeek",
				value: "deepseek",
			},
			{
				name: "Fireworks",
				value: "fireworks",
			},
			{
				name: "Google",
				value: "google",
			},
			{
				name: "Groq",
				value: "groq",
			},
			{
				name: "Mistral",
				value: "mistral",
			},
			{
				name: "OpenAI",
				value: "openai",
			},
			{
				name: "OpenRouter",
				value: "openrouter",
			},
			{
				name: "Perplexity",
				value: "perplexity",
			},
			{
				name: "Together AI",
				value: "together",
			},
			{
				name: "xAI",
				value: "xai",
			},
		],
		description: "AI provider to use",
		routing: {
			send: {
				type: "body",
				property: "provider",
			},
		},
	},
	{
		displayName: "Additional Options",
		name: "additionalOptions",
		type: "collection",
		placeholder: "Add Option",
		default: {},
		displayOptions: {
			show: showOnlyForAgentRunCreate,
		},
		options: [
			{
				displayName: "Branch",
				name: "branch",
				type: "string",
				default: "",
				description:
					"Git branch to target (defaults to repository default branch)",
				routing: {
					send: {
						type: "body",
						property: "branch",
					},
				},
			},
			{
				displayName: "Mode",
				name: "mode",
				type: "options",
				default: "execute",
				options: [
					{
						name: "Execute",
						value: "execute",
						description: "Run code and make changes",
					},
					{
						name: "Plan",
						value: "plan",
						description: "Return a plan without making changes",
					},
				],
				description: "Execution mode for the agent",
				routing: {
					send: {
						type: "body",
						property: "mode",
					},
				},
			},
			{
				displayName: "Auto Create PR",
				name: "auto_create_pr",
				type: "boolean",
				default: true,
				description:
					"Whether to automatically create a pull request with changes",
				routing: {
					send: {
						type: "body",
						property: "auto_create_pr",
					},
				},
			},
			{
				displayName: "Webhook URL",
				name: "webhook_url",
				type: "string",
				default: "",
				placeholder: "https://example.com/webhook",
				description:
					"URL to receive webhook notifications when the agent run completes",
				routing: {
					send: {
						type: "body",
						property: "webhook_url",
					},
				},
			},
		],
	},
];
