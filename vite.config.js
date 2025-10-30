import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config optimized for Cloudflare Pages and SPA setup
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173
  },
  build: {
    sourcemap: false,
    target: 'es2018'
  }
})


