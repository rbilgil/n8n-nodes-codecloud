"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agentRunGetDescription = void 0;
const showOnlyForAgentRunGet = {
    operation: ['get'],
    resource: ['agentRun'],
};
exports.agentRunGetDescription = [
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
//# sourceMappingURL=get.js.map