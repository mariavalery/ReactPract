import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3002',  // Backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Removes '/api' prefix
      }
    }
  }
})
