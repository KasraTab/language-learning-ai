# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Interactive language-learning React app — vocabulary, quizzes, pronunciation, progress tracking, gamified learning. Currently at boilerplate stage (Vite + React scaffolding in `src/App.jsx`); feature code has not been built yet.

## Commands

- `npm run dev` — start Vite dev server (HMR)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint over the repo

No test runner is configured.

## Stack notes

- **React 19** with the **React Compiler** enabled via `@rolldown/plugin-babel` + `babel-plugin-react-compiler` in `vite.config.js`. Don't hand-add `useMemo`/`useCallback` for compiler-eligible cases; let the compiler handle memoization.
- **JavaScript (JSX)**, not TypeScript — despite `@types/react` being installed and the Copilot instructions referencing TypeScript, all source is `.jsx` and the ESLint config only targets `**/*.{js,jsx}`.
- **Plain CSS** (`App.css`, `index.css`). Copilot instructions mention CSS Modules / Tailwind / SCSS breakpoints, but none of those are wired up yet — pick one and configure it if/when styling needs grow.
- Static assets in `public/` are served as-is (e.g. `<use href="/icons.svg#..."/>` references `public/icons.svg`). Assets imported through JS go in `src/assets/`.

## Breakpoints (defined once in _breakpoints.scss, exposed to JS via CSS custom property):

tablet: 600px, desktop: 992px, large: 1200px

## Conventions (from `.github/copilot-instructions.md`)

- Functional components + hooks; keep components small; extract reusable logic to custom hooks.
- Controlled forms; keep state close to where it's used; prefer derived state; introduce context only when prop drilling actually hurts.
- Never mutate arrays/objects in place.
- Keep the UI clean, modern, and responsive.
- Use reusable components where it makes sense.
- Use mock data/constants for now instead of hardcoding everything directly in JSX.
- Make sure all links use the existing React Router setup.
- Keep the code consistent with the existing project structure and styling approach.
- Suggested feature layout when adding real features: `src/features/{lessons,vocabulary,quizzes,progress}/`, plus `src/components/`, `src/hooks/`, `src/lib/`, `src/data/`, `src/styles/`.
- Ask before: deleting files, changing dependencies, modifying config, or any destructive git operation.

