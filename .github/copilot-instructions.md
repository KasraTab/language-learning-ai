# Copilot Instructions

This repository contains a React language-learning app. Use these instructions when generating, refactoring, or reviewing code.

## Project context

The app helps users learn and practice languages through interactive exercises, vocabulary, grammar, pronunciation, and progress tracking.

Prioritize:
- clear learning flows
- reusable UI components
- accessible interactions
- simple state management
- mobile-friendly layouts
- beginner-friendly UX

## Tech stack

- React
- Javascript
- Vite
- CSS Modules or Tailwind, depending on the existing project setup
- Prefer functional components and hooks
- Prefer composition over large components

## Coding style

- Keep components small and focused
- Use meaningful names such as `LessonCard`, `VocabularyQuiz`, `PracticeSession`
- Extract reusable logic into custom hooks
- Avoid over-engineering
- Avoid unnecessary dependencies

## Breakpoints
(defined once in `_breakpoints.scss`, exposed to JS via CSS custom property):
- tablet: 600px, desktop: 992px, large: 1200px

## Static assets
live in `public/` (images, SVG logos, video, favicons) and are served as-is by Vite.

## React rules

- Use controlled components for forms
- Keep state close to where it is used
- Use derived state instead of duplicating state
- Avoid deeply nested prop drilling; introduce context only when needed
- Do not mutate arrays or objects directly

## App architecture

Suggested structure:

```txt
src/
  components/
  features/
    lessons/
    vocabulary/
    quizzes/
    progress/
  hooks/
  lib/
  data/
  types/
  styles/
