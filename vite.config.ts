import path from 'path'

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidPlugin()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  test: {
    coverage: { 100: true },
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
})
