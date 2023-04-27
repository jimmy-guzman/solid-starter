# Solid Starter

> 🍱 another opinionated [Solid][solid] starter

## Features

[![vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)][vite]
[![solid](https://img.shields.io/badge/Solid%20JS-2C4F7C?style=for-the-badge&logo=solid&logoColor=white)][solid]
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)][TypeScript]
[![tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)][tailwindcss]
[![vitest](https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)][vitest]
[![Testing Library](https://img.shields.io/badge/-testinglibrary-%23E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)][Testing Library]
[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)][Playwright]
[![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)][eslint]
[![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)][prettier]
[![pnpm](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)][pnpm]
[![Github Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)][Github Actions]

- ⚡️ [vite][vite] for fast server start and HMR
- 💄 [tailwindcss][tailwindcss] for utility-first CSS
- 🧪 [vitest][vitest] for fast testing
- 🧪 [Playwright][Playwright] for fast and reliable e2e testing
- 🩺 [eslint][eslint] for static analysis
- 🎨 [prettier][prettier] for formatting
- ⚡️ [pnpm][pnpm] for fast and consistent installs
- 👷 [Github Actions][Github Actions] for easy workflow automation

## Getting Started

Make sure you're using [node 18](https://nodejs.dev/en/about/releases), I recommend using [fnm](https://github.com/Schniz/fnm) which will allow to simply run:

```
fnm use
```

First install dependencies with [pnpm](https://pnpm.io/installation), by running the following command:

```
pnpm install
```

Then to run the development server, run the following command:

```
pnpm dev
```

Your application will be available at http://localhost:5173/ ❤️

## Available Tasks

To build for production, run the following command:

```
pnpm build
```

To build preview production build, run the following command:

```
pnpm preview
```

_must have ran `pnpm build` previously_

To run unit tests, run the following command:

```
pnpm test
```

To run e2e tests, run the following command:

```
pnpm e2e
```

To lint, run the following command:

```
pnpm lint
```

_you can run `pnpm lint:fix` to fix all lint errors_

To format, run the following command:

```
pnpm format
```

_you can run `pnpm format:fix` to fix all format errors_

To validate everything, run the following command:

```
pnpm validate
```

## Recommendations

If you need to do more, I recommend the following libraries:

- [TanStack Query](https://tanstack.com/query/v4/docs/solid/overview) for **data management** which will take care of fetching, caching, synchronizing and updating server state for you
  - [msw](https://mswjs.io/) for when you start testing your data integrations
- [Solid Router](https://github.com/solidjs/solid-router) for when you need **client side routing**
- [TanStack Table](https://tanstack.com/table/v8/docs/adapters/solid-table) for when you need to build complex **tables** or **data grids**
- [fathom](https://usefathom.com/) for **analytics** which is easy to use

<!-- features references start -->

[vite]: https://vitejs.dev
[solid]: https://docs.solidjs.com
[TypeScript]: https://www.typescriptlang.org
[tailwindcss]: https://tailwindcss.com
[eslint]: https://eslint.org
[vitest]: https://vitest.dev/guide/why.html
[Testing Library]: https://testing-library.com/docs/guiding-principles
[Playwright]: https://playwright.dev
[prettier]: https://prettier.io
[pnpm]: https://pnpm.io
[Github Actions]: https://github.com/features/actions

<!-- features references end -->
