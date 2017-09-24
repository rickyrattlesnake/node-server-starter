'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    open: true,
    port: 9000,
    watchContentBase: true,
  }
};
