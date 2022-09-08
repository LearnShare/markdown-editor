import path from 'path';
import {
  defineConfig,
} from 'vite';
import react from '@vitejs/plugin-react';

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
});
