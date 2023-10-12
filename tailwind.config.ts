import type { Config } from 'tailwindcss'

export default {
  content: [ './index.html','./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
} satisfies Config

