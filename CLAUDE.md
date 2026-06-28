# Design System Rules

Stack: **Next.js 16**, **Tailwind v4**, **shadcn/ui** (style: `base-nova`, icons: lucide-react).  
Detailed rules and don'ts → `.claude/rules/design-system.md`.

## Tokens — always use these, never raw hex/px/oklch

**Colors** — Tailwind classes backed by CSS variables in `app/globals.css`:

| Class prefix | Tokens |
|---|---|
| `bg-` / `text-` | `background`, `foreground` |
| `bg-` / `text-` | `card`, `card-foreground` |
| `bg-` / `text-` | `popover`, `popover-foreground` |
| `bg-` / `text-` | `primary`, `primary-foreground` |
| `bg-` / `text-` | `secondary`, `secondary-foreground` |
| `bg-` / `text-` | `muted`, `muted-foreground` |
| `bg-` / `text-` | `accent`, `accent-foreground` |
| `bg-` / `text-` | `destructive` |
| misc | `border-border`, `ring-ring`, `bg-input` |
| sidebar | `bg-sidebar`, `text-sidebar-foreground`, `bg-sidebar-primary`, `bg-sidebar-accent` |
| charts | `bg-chart-1` … `bg-chart-5` |

**Radius:** `rounded-sm` · `rounded-md` · `rounded-lg` (base 0.625 rem) · `rounded-xl` · `rounded-2xl` · `rounded-3xl` · `rounded-4xl`

**Fonts:** `font-sans` (Geist) · `font-mono` (Geist Mono)

**Spacing:** Tailwind v4 default 4 px grid — `gap-1` (4 px) · `gap-2` (8 px) · `gap-4` (16 px) · `gap-6` (24 px) · `gap-8` (32 px) · `gap-12` (48 px).

## Component rules

1. **Compose from `components/ui/`** — never hand-roll button, input, select, dialog, dropdown, tooltip, or any primitive already in that folder.
2. **Recurring patterns belong in `components/composite/`** — if the same combination of primitives appears in 2+ places, wrap it there.
3. **Preserve built-in behavior** — don't strip or override shadcn/Radix focus-visible, keyboard, or ARIA attributes.
4. **When tokens or components fall short, ask** — don't invent one-off values or add new primitives without discussion.
