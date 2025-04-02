/// <reference types='vite/client' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  base: '/my-app',
  server: {
    allowedHosts: [
      'localhost',
      'd2bm7gnt0sooea.cloudfront.net'
    ],
    host: true,
    port: 8081,
  },
})