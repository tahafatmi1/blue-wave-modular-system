import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/blue-wave-modular-system/' : '/',
  plugins: [react()],
  build: {
    assetsInlineLimit: 4096,
  },
});
