import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Base path para GitHub Pages (substitua pelo nome do seu repositório)
  base: '/Site/',
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Usar esbuild em vez de terser para simplicidade
    target: 'es2015',
    
    rollupOptions: {
      output: {
        manualChunks: undefined, // Remover chunk splitting para simplificar
      }
    }
  },
  
  // Resolver configurações
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  
  // Server de desenvolvimento
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  
  // Preview server
  preview: {
    port: 4173,
    open: true,
  }
})
