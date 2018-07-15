const webpack = require('webpack');
const { join } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const buildPath = join(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: [
    'babel-polyfill',
    './src/index',
  ],
  output: {
    filename: 'bundle.js',
    path: buildPath,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('autoprefixer'),
                ],
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    new OptimizeCSSAssetsPlugin(),
    new ExtractTextPlugin('styles.css'),

  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
};