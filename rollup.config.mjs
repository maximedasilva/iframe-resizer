import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [{
  input: 'src/iframeResizer.js',
  output: [{ file: 'rollup_js/iframeResizer.js' }],
  plugins: []
}, {
  input: 'src/iframeResizer.contentWindow.js',
  output: [{ file: 'rollup_js/iframeResizer.contentWindow.js' }],
  plugins: []
}, {
  input: 'src/iframeResizer.contentWindow.js',
  output: [{ file: 'rollup_js/iframeResizer.contentWindow.min.js', sourcemap: true }],
  plugins: [commonjs(), terser()]
}, {
  input: 'src/iframeResizer.js',
  output: [{ file: 'rollup_js/iframeResizer.min.js', sourcemap: true }],
  plugins: [commonjs(), terser()]
}]