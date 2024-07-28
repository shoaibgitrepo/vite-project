import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/AgreementDashboard': {
        target: 'https://demos.auburnsolutions.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/AgreementDashboard/, ''),
      },
    },
  },
})
