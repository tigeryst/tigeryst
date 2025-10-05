# CLAUDE.md - Development Guide

> AI Assistant style guide for Tiger Yotsawat's portfolio website

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 3.4
- **Fonts:** Open Sans (primary), Lora (secondary)

## CSS & Styling: CUBE CSS Methodology

Follow **CUBE CSS** (Composition, Utility, Block, Exception) with Tailwind. Use pipes | to help group applied stylings based on their role as Composition, Utility, or Block.

## Accessibility Standards

### Semantic HTML

```tsx
// ✅ Use semantic elements
<article>, <section>, <nav>, <header>, <main>
```

### ARIA & Keyboard

- Add `aria-label` to interactive elements without text
- Use `aria-expanded` for toggleable UI
- Ensure keyboard navigation works
- Visible focus states

### Images

```tsx
// Descriptive alt text
<Image src={img} alt="Tiger Yotsawat smiling in professional attire" />

// Decorative images
<Image src={pattern} alt="" role="presentation" />
```

## Key Rules

1. **Tailwind first** - Use utilities before custom CSS
2. **CSS Modules for complexity** - Animations, pseudo-elements, component states
3. **Strict TypeScript** - No implicit any
4. **Semantic HTML** - Right element for the job
5. **Test accessibility** - Keyboard navigation & screen readers
6. **Suggest rather than enforce styling** - Apply minimal styling only where necessary. Let the browser default do most of the work. Think of Kevin Powell's lessons!

---
