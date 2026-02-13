import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@vdsystem/components': resolve(__dirname, 'libs/components/index.ts'),
      '@vdsystem/utils': resolve(__dirname, 'libs/utils/index.ts')
    }
  }
});
