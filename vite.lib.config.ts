import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

const libName = process.env.LIB_NAME;

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      tsconfigPath: './tsconfig.lib.json',
      outDir: `./dist/${libName}`,
      entryRoot: `./libs/${libName}`,
      include: [`libs/${libName}/**/*.ts`],
      exclude: ['**/*.test.ts', '**/*.spec.ts', 'node_modules/**', 'dist/**'],
      insertTypesEntry: true,
      copyDtsFiles: true
    }),
    viteStaticCopy({
      targets: [
        {
          src: `libs/${libName}/package.json`,
          dest: '.'
        }
      ]
    })
  ],
  publicDir: false,
  build: {
    emptyOutDir: true,
    outDir: `dist/${libName}`,
    lib: {
      entry: resolve(__dirname, `libs/${libName}/index.ts`),
      formats: ['es'],
      fileName: 'index'
    },

    rollupOptions: {
      external: [],
      output: {
        preserveModules: true,
        preserveModulesRoot: `libs/${libName}`,
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        format: 'es',
        inlineDynamicImports: false,
        hoistTransitiveImports: false,
        manualChunks: undefined,
        exports: 'named',
        globals: {}
      },
      treeshake: false
    },
    minify: false,
    sourcemap: false
  }
});
