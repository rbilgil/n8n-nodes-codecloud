"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agentRunDescription = void 0;
const create_1 = require("./create");
const get_1 = require("./get");
const getAll_1 = require("./getAll");
const sendMessage_1 = require("./sendMessage");
const showOnlyForAgentRun = {
    resource: ["agentRun"],
};
exports.agentRunDescription = [
    {
        displayName: "Operation",
        name: "operation",
        type: "options",
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForAgentRun,
        },
        options: [
            {
                name: 'Create Run',
                value: "create",
                action: "Create an agent run",
                description: "Create a new AI agent run on a GitHub repository",
                routing: {
                    request: {
                        method: "POST",
                        url: "/v1/agents",
                    },
                },
            },
            {
                name: 'Get Many',
                value: "getAll",
                action: "Get agent runs",
                description: "Retrieve a list of agent runs",
                routing: {
                    request: {
                        method: "GET",
                        url: "/v1/agents",
                    },
                    output: {
                        postReceive: [
                            {
                                type: "rootProperty",
                                properties: {
                                    property: "runs",
                                },
                            },
                        ],
                    },
                },
            },
            {
                name: 'Get Run',
                value: "get",
                action: "Get an agent run",
                description: "Get the details of a specific agent run",
                routing: {
                    request: {
                        method: "GET",
                        url: "=/v1/agents/run/{{$parameter.runId}}",
                    },
                },
            },
            {
                name: 'Send Follow-Up',
                value: "sendMessage",
                action: "Send a follow up message",
                description: "Send a follow-up prompt to continue a completed agent run",
                routing: {
                    request: {
                        method: "POST",
                        url: "=/v1/agents/run/{{$parameter.runId}}/message",
                    },
                },
            },
        ],
        default: "create",
    },
    ...create_1.agentRunCreateDescription,
    ...getAll_1.agentRunGetAllDescription,
    ...get_1.agentRunGetDescription,
    ...sendMessage_1.agentRunSendMessageDescription,
];
//# sourceMappingURL=index.js.map