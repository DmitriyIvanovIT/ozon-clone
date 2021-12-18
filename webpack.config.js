const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const src = path.resolve(__dirname, './src');
const build = path.resolve(__dirname, './build');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry:  src + '/index.ts',
  output: {
    path: build,
    filename: "[name].[contenthash].js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.s([ac])ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: src + '/public/img',
          to: build + '/img',
        },
        {
          from: src + '/public/favicon',
          to: build + '/favicon',
        },
        {
          from: src + '/public/db',
          to: build + '/db',
        }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: src + '/public/index.html',
      minify: {
        collapseWhitespace: !isDev
      }
    }),
    new ESLintPlugin(),
  ],
  resolve: {
    alias: {
      '@': src,
    },
    extensions: ['.ts', '.js'],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    static: [build],
  }
}
