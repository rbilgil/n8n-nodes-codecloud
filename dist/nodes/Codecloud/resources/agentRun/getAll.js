"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agentRunGetAllDescription = void 0;
const showOnlyForAgentRunGetAll = {
    operation: ['getAll'],
    resource: ['agentRun'],
};
exports.agentRunGetAllDescription = [
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: showOnlyForAgentRunGetAll,
        },
        default: false,
        description: 'Whether to return all results or only up to a given limit',
        routing: {
            send: {
                paginate: '={{ $value }}',
            },
            operations: {
                pagination: {
                    type: 'offset',
                    properties: {
                        limitParameter: 'limit',
                        offsetParameter: 'offset',
                        pageSize: 100,
                        type: 'query',
                        rootProperty: 'runs',
                    },
                },
            },
        },
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: {
            show: {
                ...showOnlyForAgentRunGetAll,
                returnAll: [false],
            },
        },
        typeOptions: {
            minValue: 1,
            maxValue: 100,
        },
        default: 50,
        routing: {
            send: {
                type: 'query',
                property: 'limit',
            },
            output: {
                maxResults: '={{$value}}',
            },
        },
        description: 'Max number of results to return',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: {
            show: showOnlyForAgentRunGetAll,
        },
        options: [
            {
                displayName: 'Status',
                name: 'status',
                type: 'options',
                default: '',
                options: [
                    {
                        name: 'All',
                        value: '',
                    },
                    {
                        name: 'Completed',
                        value: 'completed',
                    },
                    {
                        name: 'Failed',
                        value: 'failed',
                    },
                    {
                        name: 'Queued',
                        value: 'queued',
                    },
                    {
                        name: 'Running',
                        value: 'running',
                    },
                ],
                description: 'Filter runs by status',
                routing: {
                    send: {
                        type: 'query',
                        property: 'status',
                        value: '={{ $value || undefined }}',
                    },
                },
            },
        ],
    },
];
//# sourceMappingURL=getAll.js.map