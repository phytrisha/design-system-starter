# Design System — Detailed Rules

## Color tokens

Never use raw hex, `rgb()`, `oklch()`, or arbitrary Tailwind syntax like `text-[#abc]`.

| Token | Purpose |
|---|---|
| `bg-background` / `text-foreground` | Page surface, body text |
| `bg-card` / `text-card-foreground` | Card surfaces |
| `bg-popover` / `text-popover-foreground` | Dropdowns, popovers, tooltips |
| `bg-primary` / `text-primary-foreground` | Primary CTA buttons, key UI |
| `bg-secondary` / `text-secondary-foreground` | Secondary surfaces |
| `bg-muted` / `text-muted-foreground` | Disabled states, placeholders, subtle text |
| `bg-accent` / `text-accent-foreground` | Hover states, selection highlights |
| `bg-destructive` / `text-destructive` | Errors, warnings, delete actions |
| `border-border` | All borders |
| `ring-ring` | Focus rings |
| `bg-input` | Form input backgrounds |

## Border radius

Use only: `rounded-sm` · `rounded-md` · `rounded-lg` · `rounded-xl` · `rounded-2xl` · `rounded-3xl` · `rounded-4xl`

`rounded-full` is reserved for avatars and pill badges only.

## Button

```tsx
import { Button } from "@/components/ui/button"

// Variants: default | outline | secondary | ghost | destructive | link
// Sizes:    default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg

<Button variant="default">Save</Button>
<Button variant="ghost" size="icon"><Trash2 /></Button>
<Button variant="destructive" size="sm">Delete account</Button>
```

## Badge

```tsx
import { Badge } from "@/components/ui/badge"

// Variants: default | secondary | destructive | outline
<Badge variant="secondary">Draft</Badge>
```

## Form pattern (label + input)

```tsx
<div className="grid gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

For validated forms use `components/ui/form` (react-hook-form + zod).
Always pair `FormLabel`, `FormControl`, `FormMessage` — never skip `FormMessage`.

## Layout conventions

- **Grid gaps:** `gap-2` (8 px) · `gap-4` (16 px) · `gap-6` (24 px) · `gap-8` (32 px)
- **Section padding:** `py-12 md:py-24`
- **Page container:** `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- **Card inner padding:** `p-6`

## Spacing scale (4 px base)

`space-0.5` 2 px · `space-1` 4 px · `space-2` 8 px · `space-3` 12 px · `space-4` 16 px · `space-6` 24 px · `space-8` 32 px · `space-12` 48 px · `space-16` 64 px

## Naming

- Composite components: `[Descriptor][Type].tsx` — e.g. `UserProfileCard.tsx`, `SearchForm.tsx`, `PageHeader.tsx`
- Props: use `variant`, `size`, `className` — not `btnVariant`, `type` for styling intent

## Icons

Use **lucide-react** only — already installed.
Size icons with `className="size-4"` (or `size-5`, `size-6`), not `w-4 h-4`.

## Don'ts

- No arbitrary Tailwind values: `w-[372px]` · `text-[#ff0000]` · `p-[13px]`
- No inline `style={{ }}` for anything a token covers
- No raw `<button>`, `<input>`, `<select>`, `<textarea>`, `<dialog>` — use shadcn primitives
- No `focus:outline-none` without a replacement `focus-visible:ring-*` style
- No extra icon libraries — lucide-react only
- No `tailwind.config.ts` — Tailwind v4 is configured in CSS (`app/globals.css`)
- No `darkMode: "class"` config — dark mode uses `@custom-variant dark` already in globals.css
