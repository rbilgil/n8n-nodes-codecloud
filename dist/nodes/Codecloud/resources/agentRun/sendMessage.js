"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agentRunSendMessageDescription = void 0;
const showOnlyForAgentRunSendMessage = {
    operation: ["sendMessage"],
    resource: ["agentRun"],
};
exports.agentRunSendMessageDescription = [
    {
        displayName: "Run ID",
        name: "runId",
        type: "string",
        default: "",
        required: true,
        displayOptions: {
            show: showOnlyForAgentRunSendMessage,
        },
        description: "The ID of the agent run to send a follow-up message to",
    },
    {
        displayName: "Prompt",
        name: "prompt",
        type: "string",
        typeOptions: {
            rows: 4,
        },
        default: "",
        required: true,
        displayOptions: {
            show: showOnlyForAgentRunSendMessage,
        },
        description: "Follow-up instruction for the agent (max 100,000 characters)",
        routing: {
            send: {
                type: "body",
                property: "prompt",
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
            show: showOnlyForAgentRunSendMessage,
        },
        options: [
            {
                displayName: "Mode",
                name: "mode",
                type: "options",
                default: "",
                options: [
                    {
                        name: "Use Original Mode",
                        value: "",
                    },
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
                description: "Override the run mode for this follow-up",
                routing: {
                    send: {
                        type: "body",
                        property: "mode",
                        value: "={{ $value || undefined }}",
                    },
                },
            },
            {
                displayName: "Update PR",
                name: "update_pr",
                type: "boolean",
                default: true,
                description: "Whether to push changes to the existing pull request",
                routing: {
                    send: {
                        type: "body",
                        property: "update_pr",
                    },
                },
            },
        ],
    },
];
//# sourceMappingURL=sendMessage.js.map