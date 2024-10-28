import UnoCSS from 'unocss/vite'
// import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS({
    // configFile: '../uno.config.ts',
    configFile: 'uno.config.js'
  }),
  // Unocss({ /* Options */}),
  react()],
})