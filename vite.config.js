import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: { // For Docker copied from https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defa
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5173",
  },
})
