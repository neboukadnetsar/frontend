import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': 'vue/dist/vue.esm-bundler'
    }
  },
  server: {
    host: 'https://rodrigo-12jp.onrender.com',
    // https: true,
    proxy: {
      '/': 'https://rodrigo-12jp.onrender.com',
      '/api': {
        target: 'https://rodrigo-12jp.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
