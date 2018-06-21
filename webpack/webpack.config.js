const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const alias = require('./alias');
const rules = require('./rules');

const devMode = process.env.NODE_ENV !== 'production';
const rootDir = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(rootDir, 'src/index.js'),
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    alias,
  },
  module: {
    rules,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html',
      inject: 'body',
      minify: { collapseWhitespace: true, removeComments: true },
      hash: true,
      xhtml: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ],
  devServer: {
    contentBase: path.join(rootDir, 'dist'),
    compress: true,
    port: 9000,
  },
};
