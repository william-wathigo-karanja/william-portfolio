import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ replace 'william-portfolio' with your actual repo name
export default defineConfig({
  plugins: [react()],
  base: '/william-portfolio/',
})
