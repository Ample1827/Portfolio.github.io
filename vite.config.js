// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/', // ✅ base goes here, outside of plugins
  plugins: [
    react(),
    tailwindcss(),
  ],
})
