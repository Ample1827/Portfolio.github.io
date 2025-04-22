import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Conditional base URL for GitHub Pages
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === "build" ? "/Portfolio/" : "/",
}));