import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://linkuplocal.onrender.com", // Replace with your Django backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

//when trying in production change traget to https://linkuplocal.onrender.com
//for development http://localhost:8000
//also change this string in different files
