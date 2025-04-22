import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './index.html' // Explicit entry point
    }
  },
  resolve: {
    alias: {
      '@': '/src' // Absolute imports (optional)
    }
  }
}));