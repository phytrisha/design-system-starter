# components/composite/

Composite components are composed wrappers built from `components/ui/` primitives.
They encode recurring patterns so individual screens don't re-implement them.

## What belongs here

- A combination of primitives that appears in 2+ places (e.g. a search input with clear button, a data card with header + actions, a multi-step form shell).
- Wrappers that add layout or interaction defaults on top of a primitive (e.g. a `ConfirmDialog` that always includes a cancel + confirm button pair).

## What does NOT belong here

- One-off layouts specific to a single page.
- Thin wrappers around a single primitive with no added logic.
- Speculative components ("we might need this someday").

## Rules

- Import primitives from `@/components/ui/*` only — no hand-rolled base elements.
- Accept a `className` prop and forward it to the root element via `cn()` from `@/lib/utils`.
- Name files `[Descriptor][Type].tsx` — e.g. `UserProfileCard.tsx`, `PageHeader.tsx`, `SearchForm.tsx`.
