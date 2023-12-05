import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add the following options to configure Vite for JSX and assets
  build: {
    rollupOptions: {
      output: {
        // Ensure that JSX files are treated as ES modules
        format: 'es',
      },
    },
  },
  // Configure Vite to handle assets
  resolve: {
    alias: {
      // You can specify an alias for vite.svg if needed
      // 'vite.svg': '/path/to/vite.svg',
    },
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
