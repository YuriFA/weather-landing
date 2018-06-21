const atImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const csso = require('postcss-csso');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  map: debug,
  plugins: [
    atImport(),
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
