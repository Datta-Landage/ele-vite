import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: { exclude: ['electron'] },
  build: {
    rollupOptions: {
      external: ['electron']
    }
  }
});
