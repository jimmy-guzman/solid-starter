import path from 'node:path'

import { defineConfig, loadEnv } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { configDefaults } from 'vitest/config'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [solidPlugin()],
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
    server: {
      port: parseInt(env.PORT, 10),
    },
    test: {
      environment: 'jsdom',
      globals: true,
      deps: {
        optimizer: {
          web: {
            exclude: ['solid-js'],
          },
        },
      },
      exclude: [...configDefaults.exclude, 'e2e/*'],
      setupFiles: './src/test/setup.ts',
      coverage: {
        reporter: ['html', 'text-summary'],
        exclude: [
          ...(configDefaults.coverage.exclude ?? []),
          'storybook-static/**',
          '.storybook/**',
          '**/*.stories.*',
          '**/main.tsx',
          '{tailwind,postcss,playwright}.config.*',
        ],
      },
    },
  }
})
