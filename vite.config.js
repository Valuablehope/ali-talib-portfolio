// vite.config.js (in root directory)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/ali-talib-portfolio/' when deploying to GitHub Pages
})