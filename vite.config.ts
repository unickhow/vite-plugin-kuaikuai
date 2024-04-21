import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VitePluginKuaiKuai',
      fileName: 'vite-plugin-kuaikuai',
    },
    rollupOptions: {
      external: ['picocolors'],
      output: {
        globals: {
          picocolors: 'picocolors',
        },
      },
    },
  },
})
