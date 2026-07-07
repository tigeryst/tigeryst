# Contributing

My portfolio site at [tigeryotsawat.com](https://tigeryotsawat.com). This is also the `tigeryst/tigeryst` profile repo, so `README.md` is my GitHub profile page; everything about working on the site lives here instead.

## Getting started

Prerequisites: Node.js 24+ (see `.nvmrc`) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Script                      | What it does                                |
| --------------------------- | ------------------------------------------- |
| `npm run dev`               | Dev server with Turbopack                   |
| `npm run build`             | Production build                            |
| `npm run start`             | Serve the production build locally          |
| `npm run lint`              | ESLint                                      |
| `npm run typecheck`         | TypeScript, no emit                         |
| `npm run format` / `:check` | Prettier write / verify (CI runs the check) |

A husky pre-commit hook runs ESLint and Prettier on staged files. CI (`.github/workflows/ci.yml`) runs format check, lint, typecheck, and build on pushes and PRs.

## Conventions

- Conventional Commits ("fix: correct apostrophe escaping"), matching my other repos. A commitlint hook enforces the format on every commit. There's no release tooling here (no versions or changelog), so the payoff is consistency, not automation.
- I commit directly to `main` for small changes and branch for anything I want CI to check first.
- Keep `main` green: CI runs on every push, and I only deploy from a green `main`.
- Architecture and styling conventions are in [`AGENTS.md`](AGENTS.md) (CUBE CSS with Tailwind, CSS Modules for the complex cases).

## Deploying

The site is hosted on Vercel but not connected to GitHub: the free plan allows one connected repo, and with two static sites hosted there, neither gets the slot. Deploys are manual through the Vercel CLI:

```bash
npx vercel login          # once
npx vercel link           # once per clone; writes the gitignored .vercel/ directory
npx vercel deploy --prod  # from an up-to-date main with CI green
```

This clone is already linked. Nothing deploys automatically, so pushing to `main` publishes nothing until I run the deploy.
