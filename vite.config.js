//Go this file and add require portion what is needed
// https://github.com/vitejs/vite/issues/3243

import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
const pageData = {
  '/index.html': {
    title: 'Main Page',
  },
  '/site/pages/test.html': {
    title: 'Sub Page',
  },
};


export default defineConfig({
  root: resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        nested: resolve(__dirname, 'src/site/pages/article.html'),
        nested2: resolve(__dirname, 'src/site/pages/test.html')
      },
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        // ref: https://github.com/vitejs/vite/discussions/6552
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/style[extname]';
          }
          if (/\.(woff|woff2)$/.test(name ?? '')) {
            return 'assets/fonts/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      }
    },
    minify: 'false',
  },
  server: {
    port: 8080,
    hot: true
  },
  plugins: [
    handlebars({
      context(pagePath) {
        return pageData[pagePath];
      },
      partialDirectory: resolve(__dirname, 'src/site/partials'),
    }),
  ]
})
