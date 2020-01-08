import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import svelte from 'rollup-plugin-svelte';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { fileRouter } from 'svelte-filerouter';
import { terser } from 'rollup-plugin-terser';
import conf from 'config';

// Vars
const production = !process.env.ROLLUP_WATCH;

/**
 * Process the conf for rollup-replace
 * @example: process.env.firebase
 */
const appConfig = Object.keys(conf).reduce((o,c) => {
  o[`process.env.${c}`] = JSON.stringify(conf[c]);
  return o;
}, {});

// Configuration
export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  plugins: [
    // Alias
    alias({
      resolve: ['.js', '.svelte'],
      entries: {
        src: __dirname + '/src'
      }
    }),
    // Replace
    replace({
      ...appConfig
    }),
    // Livereload
    livereload(),
    // Filerouter
    fileRouter({}),
    // Svelte
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // extract any component CSS out to a separate file
      css: css => {
        css.write('public/bundle.css');
      }
    }),
    // For external dependencies
    resolve(),
    commonjs(),
    // If production -> minify
    production && terser()
  ]
};
