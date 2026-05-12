import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    minify: 'esbuild',
    // Inline small assets to reduce requests
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          // Only react — framer-motion is REMOVED
          'vendor-react': ['react', 'react-dom'],
        },
      },
    },
    // Raise chunk size warning threshold
    chunkSizeWarningLimit: 500,
  },
  // Optimize deps — exclude framer-motion if still present elsewhere
  optimizeDeps: {
    exclude: ['framer-motion'],
  },
})