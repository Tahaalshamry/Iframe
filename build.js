import { build } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Build configuration for GitHub Pages
const buildConfig = {
  root: './client',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@assets': path.resolve(__dirname, './client/assets'),
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
}

console.log('Building for GitHub Pages...')
await build(buildConfig)
console.log('Build completed successfully!')