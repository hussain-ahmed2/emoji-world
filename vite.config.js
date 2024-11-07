import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/emoji-api": {
        target: "https://emoji-api.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/emoji-api/, ""),
      },
    },
  },
});
