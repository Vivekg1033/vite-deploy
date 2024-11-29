

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/reacct-app-hosting/', // Replace with your GitHub repository name
});
