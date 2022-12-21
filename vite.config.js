import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	mode: 'development',
	// base: '/dist',
	define: {
		// 'process.env': process.env,
	},
	server: {
		// open: '/src/index.html'
		// port: '5174',
		// hmr: false
	},
	build: {
		// Disables minification of js only, doesn't disable css minify at the moment - https://github.com/vitejs/vite/issues/5619
		// minify: false,
		// sourcemap: true,
		outDir: 'dist',
		// Set to false if the dist folder is simultaneously updated by both Vite watch-build & Other CLI watch commands
		// emptyOutDir: true,
		// https://vitejs.dev/config/build-options.html#build-lib
		lib: {
			// // entry file that has es modules, library imports (like bootstrap), scss that requires preprocessing
			// entry: './src/main.js',
			// Can specify multiple entries. Note: When multiple entries are used, remove 'umd' and 'iife' from output formats below
			entry: {
				// confetti: './src/modules/confetti.js',
				main: './src/main.js'
			},
			name: 'MyLib',
			fileName: '[name]',
			// fileName: (format, entryAlias) => `${entryAlias}.${format}.js`,
			formats: ['es', 'cjs' /*, 'umd', 'iife'*/] // defaults to ['es', 'umd'], and ['es', 'cjs'] when multiple entries are used.
		},

		// Vite uses Rollup under the hold, so rollup options & plugins can be used for advanced usage
		rollupOptions: {
			plugins: [visualizer()],
			output: {
				// Just a simple function to get the css file generated as output.css under dist/assets/css folder. And all the images under dist/assets/img folder.
				assetFileNames: (assetInfo) => {
					let extType = assetInfo.name.split('.').at(1)
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						extType = 'img'
					}
					if (extType === 'css') {
						return `assets/${extType}/output[extname]`
					} else {
						// js & images
						return `assets/${extType}/[name]-[hash][extname]`
					}
				}
			}
		}
	},
	//...
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			vue: 'vue/dist/vue.esm-bundler.js'
		}
	}
})
