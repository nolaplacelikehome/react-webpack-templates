const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, './client/dist'),
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({ template: './client/src/index.html' })],
  modules: {
      rules: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          },
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.(.png|svg|jpg|gif)$/i,
              type: 'asset/resource'
          }
      ]
  }
};