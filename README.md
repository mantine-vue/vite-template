# Mantine Vue Vite template

A [Vite](https://vitejs.dev/) + [Vue 3](https://vuejs.org/) starter for
[Mantine Vue](https://mantine-vue.dev/) with the full development setup.

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue Router](https://router.vuejs.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro)
- Oxlint setup for TypeScript and Vue sources

## npm scripts

### Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types with `vue-tsc`
- `lint` – runs oxlint and stylelint
- `format:test` – checks files with oxfmt
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `typecheck`, `format:test`, `lint`, `vitest` and `build` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `format:write` – formats all files with oxfmt
