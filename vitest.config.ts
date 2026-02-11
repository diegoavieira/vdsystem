import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json', 'lcov'],
      include: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
      exclude: [],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80
      }
    },
    projects: [
      {
        test: {
          name: 'libs',
          root: './libs'
        },
        extends: true
      },
      {
        test: {
          name: 'app',
          root: './src'
        },
        extends: true
      }
    ]
  },
  resolve: {
    alias: {
      '@vdsystem/app': path.resolve(__dirname, './src'),
      '@vdsystem/components': path.resolve(__dirname, './libs/components'),
      '@vdsystem/utils': path.resolve(__dirname, './libs/utils')
    }
  }
});
