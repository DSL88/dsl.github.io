import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // O caminho base para um repositório de usuário (username.github.io) é a raiz.
  base: '/',
  server: {
    host: true,
    port: 3000,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
  },
});