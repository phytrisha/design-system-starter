# Design System Starter

A Next.js + Tailwind v4 + shadcn/ui starter wired up for Claude Code.

## Setup

### Prerequisites

- **Node.js 18+** — [nodejs.org](https://nodejs.org)
- **Claude Code** — `npm install -g @anthropic-ai/claude-code`
- **Anthropic API key** — get one at [console.anthropic.com](https://console.anthropic.com), then either:
  - Run `claude auth login` (recommended — no raw key needed), or
  - Export `ANTHROPIC_API_KEY=your-key` in your shell profile

### Install and run

```bash
git clone <repo-url>
cd design-system-starter
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the project.

### Start Claude Code

```bash
claude
```

Run this from inside the project directory. Claude Code will automatically load the design system rules from `CLAUDE.md` and `.claude/rules/design-system.md`.

The first time you use a shadcn component tool, you may be prompted to approve running `npx -y shadcn@latest mcp` — allow it.

## Stack

- **Next.js 16** with App Router
- **Tailwind v4** — configured in `app/globals.css`, no `tailwind.config.ts`
- **shadcn/ui** — style: `base-nova`, icons: lucide-react
- **20 UI primitives** in `components/ui/`
- **Composite components** go in `components/composite/`
