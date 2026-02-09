import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // ← ini penting
    port: 5173,      // opsional, sesuaikan jika perlu
  },
  base: mode === 'production' ? '/' : '/',
}))
