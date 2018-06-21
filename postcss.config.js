const atImport = require('postcss-import');
const url = require("postcss-url")
const cssnext = require('postcss-cssnext');
const csso = require('postcss-csso');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  map: debug,
  plugins: [
    atImport({ path: ['./src']}),
    // url({ url: 'rebase'}),
    cssnext({
      features: {
        applyRule: false,
        colorHexAlpha: false,
        rem: false,
      },
    }),
    ...(debug ? [] : [csso()]),
  ],
};
