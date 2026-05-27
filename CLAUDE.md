# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (Next.js with Turbopack)
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — ESLint via `next lint` (extends `next/core-web-vitals` + `next/typescript`)

There is no test runner configured in this project.

## Architecture

Single-page portfolio built on the Next.js 15 App Router with React 19 and TypeScript (strict). The entire site is the home route; there are no API routes or dynamic segments today.

- `app/layout.tsx` — root layout. Loads Open Sans and Lora via `next/font/google`, exposing them as the `--ff-primary` / `--ff-secondary` CSS variables that Tailwind maps to `font-primary` / `font-secondary` (see `tailwind.config.ts`). Renders a sticky `<header>` with `NavBar`, then `children`, then `Footer`.
- `app/(home)/` — route group for the home page. `page.tsx` composes the sections (`Intro`, `Projects`, `Blogs`, `Interests`, `About`) inside a single `<main>`. Each section is a colocated file (`intro.tsx`, etc.) paired with an optional `*.module.css` for layout-specific rules that Tailwind can't cleanly express (grid-template-areas, pseudo-elements, themed background images).
- `app/_components/` — shared layout components (`NavBar`, `Footer`). The leading underscore keeps the folder out of Next.js routing. `NavBar` is a `"use client"` component driving mobile toggle + scroll state via `data-expanded` / `data-scrolled` attributes consumed by `NavBar.module.css`.
- `app/globals.css` — the design system. Declares the CUBE CSS layering: a `@layer base` with element defaults (body typography, heading colors, `max-width: 65ch` on text, `:has(:target)` smooth scroll), composition helpers (`.flow`, `.flow-lg`, `.flex-row`, `.grid-stack`), and a `@layer components` block that owns section padding and the `.button` / `.section-title` primitives (variants selected via `data-variant` / `data-accent` attributes).
- `public/` — static assets imported directly into components with `@/public/...` (see `tsconfig.json` `paths: { "@/*": ["./*"] }`).

### CSS strategy

Tailwind is the default styling mechanism. Reach for a CSS Module only when the rule involves responsive grid-template-areas, pseudo-elements, stateful attribute selectors, or themed background-images — see `app/(home)/intro.module.css` and `app/(home)/interests.module.css` for the established pattern. Module files use `theme("...")` to stay in sync with `tailwind.config.ts`.

### Design tokens

The Tailwind theme is intentionally small and numeric-scale-based: `colors.neutral.{100,300,400,600,900}`, `colors.accent.{400,600}`, `fontSize.{100,300,400,500,600,900}`, and a custom `fontWeight` scale (`light/regular/bold/black` → 200/300/600/900). Prefer these tokens over ad-hoc values so modules and utilities stay aligned.

## CSS & Styling: CUBE CSS Methodology

Follow **CUBE CSS** (Composition, Utility, Block, Exception) with Tailwind. Use pipes `|` in `className` to group stylings by role — Composition | Utility | Block. Existing sections (e.g. `interests.tsx`, `NavBar.tsx`) follow this convention.

## Accessibility Standards

### Semantic HTML

```tsx
// ✅ Use semantic elements
<article>, <section>, <nav>, <header>, <main>
```

### ARIA & Keyboard

- Add `aria-label` to interactive elements without text (see the hamburger `<button>` in `NavBar.tsx`)
- Use `aria-expanded` for toggleable UI
- Ensure keyboard navigation works
- Visible focus states (the `.button` primitive already defines a focus outline)

### Images

```tsx
// Descriptive alt text
<Image src={img} alt="Tiger Yotsawat smiling in professional attire" />

// Decorative images
<Image src={pattern} alt="" role="presentation" />
```

## Key Rules

1. **Tailwind first** — use utilities before custom CSS
2. **CSS Modules for complexity** — animations, pseudo-elements, attribute-driven component states, responsive grid-template-areas
3. **Strict TypeScript** — no implicit `any`
4. **Semantic HTML** — right element for the job
5. **Test accessibility** — keyboard navigation & screen readers
6. **Suggest rather than enforce styling** — apply minimal styling only where necessary. Let browser defaults do most of the work. Think of Kevin Powell's lessons.
