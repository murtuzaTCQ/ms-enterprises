import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // ✅ FIX: let Vite include JPG/PNG assets during build
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.jpeg"],
});
