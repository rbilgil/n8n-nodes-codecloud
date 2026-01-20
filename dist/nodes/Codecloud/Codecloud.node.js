"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Codecloud = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const agentRun_1 = require("./resources/agentRun");
class Codecloud {
    constructor() {
        this.description = {
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
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
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
                ...agentRun_1.agentRunDescription,
            ],
        };
    }
}
exports.Codecloud = Codecloud;
//# sourceMappingURL=Codecloud.node.js.map