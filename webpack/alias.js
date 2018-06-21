const path = require('path');

const rootDir = path.resolve(__dirname, '../');
const alias = {
  styles: path.resolve(rootDir, 'src/styles'),
  images: path.resolve(rootDir, 'src/images'),
};

module.exports = alias;
