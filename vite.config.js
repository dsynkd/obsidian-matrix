import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    cssMinify: false,
    rollupOptions: {
      input: 'src/entry.js',
      output: {
        entryFileNames: '[name].js',
        assetFileNames: () => 'theme.css',
      },
    },
  },
});
