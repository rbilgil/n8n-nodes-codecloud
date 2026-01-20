# n8n-nodes-codecloud

This is an n8n community node. It lets you use [Codecloud](https://codecloud.dev) in your n8n workflows.

Codecloud is a service for running AI coding agents in the cloud. Connect your GitHub repo, make an API request, and let AI agents automate coding tasks.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Agent Run

- **Create Run** - Create a new AI agent run on a GitHub repository
- **Get Many** - Retrieve a list of agent runs
- **Get Run** - Get the details of a specific agent run
- **Send Follow-Up** - Send a follow-up prompt to continue a completed agent run

## Credentials

To use this node, you need a Codecloud API key:

1. Sign up at [codecloud.dev](https://codecloud.dev)
2. Connect your GitHub account
3. Generate an API key from your dashboard
4. API keys start with `cc_`

## Compatibility

Tested with n8n version 1.0+.

## Usage

### Creating an Agent Run

1. Add the Codecloud node to your workflow
2. Select "Create Run" operation
3. Enter the GitHub repository in `owner/repo` format
4. Provide a prompt describing the task for the agent
5. Select a model (e.g., Claude Sonnet 4) and provider
6. Optionally configure:
   - Target branch
   - Execution mode (execute or plan)
   - Auto-create PR setting
   - Webhook URL for completion notifications

### Monitoring Runs

Use "Get Many" to list your agent runs with optional status filtering (queued, running, completed, failed).

Use "Get Run" to retrieve full details of a specific run including results, PR information, and error messages.

### Multi-turn Conversations

Use "Send Follow-Up" to continue a completed agent run with additional instructions. This preserves the context from the original run.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Codecloud Documentation](https://codecloud.dev/docs)
- [Codecloud API Reference](https://codecloud.dev/api/openapi.json)
