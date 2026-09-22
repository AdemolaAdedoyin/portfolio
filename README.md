# Ademola Adedoyin — Engineering Portfolio

A Next.js portfolio covering backend systems, financial infrastructure, durable
job processing, and full-stack applications. The site includes project summaries,
repository and demo links, professional experience, core technologies, and contact
links.

## Featured projects

| Project | Focus |
| --- | --- |
| [ExpenseFlow](https://github.com/AdemolaAdedoyin/expenseflow) | Multi-tenant expense approvals, policy enforcement, row-level security and OIDC |
| [Fintech Transaction Platform](https://github.com/AdemolaAdedoyin/fintech) | Wallets, double-entry ledger, transfers, reversals and payment integrations |
| [Webhook Relay](https://github.com/AdemolaAdedoyin/webhook-relay) | Durable signed delivery, retries, recovery and an operations dashboard |
| [Taskflow](https://github.com/AdemolaAdedoyin/taskflow) | Durable scheduling, execution leases, distributed limits and callbacks |
| [LLM Gateway](https://github.com/AdemolaAdedoyin/llm-gateway) | Provider routing, fallback, caching and usage tracking |
| [SupportDesk](https://github.com/AdemolaAdedoyin/CS-Messaging-Web-App) | Support inbox and customer portal with demo and Firebase realtime modes |
| [20 Questions](https://github.com/AdemolaAdedoyin/20questions) | Local two-player guessing game with persistent round history |

Fintech is the maintained home for financial-systems work. RiseBeta is superseded
and is not featured as an active project. Fintech incorporates selected legacy
concepts; this does not imply every RiseBeta feature or commit was merged.

## Stack

Next.js App Router, React, TypeScript and Tailwind CSS. The site is a presentation
layer: it links to independently maintained repositories and does not run their
APIs, databases, workers, or payment integrations.

## Local development

Use Node.js 22 and npm:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables or external services are
required. To use another port: `npm run dev -- --port 3001`.

## Production build

```bash
npm run build
npm start
```

Vercel can build this repository using its Next.js preset, with the repository root
as the project directory. Publishing is a separate action; this update does not
create a deployment. If an existing Vercel project tracks main, a push can trigger
its configured deployment automatically.

## Updating content

- `app/page.tsx`: project entries, demo URLs, experience, technology list and contacts.
- `app/globals.css`: shared styling and responsive layouts.
- `app/layout.tsx`: page title, description and root document.

Keep descriptions tied to implemented behavior. Only add a live demo link when a
public demo exists. Backend setup readiness is not a claim of public production
hosting. Experience dates and impact figures are preserved from the existing site
and should be reviewed by the owner when their professional details change.

The lockfile makes builds reproducible. The Next.js PostCSS override uses the
project's declared PostCSS range to avoid its older vulnerable nested version;
review whether it is still needed when upgrading Next.js.
