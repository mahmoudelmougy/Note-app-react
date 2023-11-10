import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "Note-app-react",
  plugins: [react()],
});
