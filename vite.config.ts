import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: '[local]_[hash:base64:5]'
    },
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
})
