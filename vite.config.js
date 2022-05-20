import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/11-todoapp-react-redux-toolkit/',
  plugins: [react()]
})
