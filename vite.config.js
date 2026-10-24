import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // ── Network access ────────────────────────────────────────────────────────
  // Expose the dev server on all interfaces so any phone/tablet on the same
  // Wi-Fi can open the app by navigating to http://<your-pc-ip>:5173
  server: {
    host: '0.0.0.0',   // listen on all interfaces
    port: 5173,
    strictPort: true,
    // Proxy API requests from the frontend to the backend automatically.
    // This way the frontend never needs a hard-coded IP for the backend -
    // it always talks to its own origin (/api/…) and Vite forwards it.
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
})
