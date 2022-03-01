const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { node } = require('prop-types') // what is this for? Part of Codesmith code. 

module.exports = {
  entry:{
    src: './client/index.js'
  },
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  mode: 'development',
  module:{
    rules: [
     {
      test:/\.jsx?/,
      exclude:/node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env', '@babel/react']
      }
     },
     {
       test:/\.s?css/,
       use: ['style-loader', 'css-loader', 'sass-loader']
     }
    ]

  },
  plugins:[
   new HtmlWebpackPlugin({
    template: './index.html'
   })
  ],
  //resolve:
  devServer: {
    static:{
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build')
    },
    proxy:{
      '/api': 'http://localhost:3000'
    }
  }
}