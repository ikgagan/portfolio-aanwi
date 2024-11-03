import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

// Replace 'your-username' and 'your-repo-name' with your actual GitHub username and repository name
export default defineConfig({
  plugins: [react(), ghPages()],
  base: 'portfolio-aanwi', // Set this to the name of your repository
});
