const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const rootDir = path.resolve(__dirname, '../');

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: devMode,
    },
  },
  {
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader',
      },
    ],
  },
  {
    test: /\.css$/,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { url: false, importLoaders: 1 },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: path.resolve(rootDir, 'postcss.config.js'),
          },
        },
      },
    ],
  },
  {
    test: /\.(png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[md5:hash:hex:8].[ext]',
        },
      },
    ],
  },
  {
    test: /\.(woff|woff2|otf|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[md5:hash:hex:8].[ext]',
        },
      },
    ],
  },
  {
    test: /\.(mp4|ogg|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[md5:hash:hex:8].[ext]',
        },
      },
    ],
  },
];

module.exports = rules;
