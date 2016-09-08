var path = require('path')
var webpack = require('webpack')

var subFolder = '/distribution'
var outputPath = path.join(__dirname, subFolder)
var outputFileName = 'example.js'

var config = {
  entry: [
    './source/example.js'
  ],
  output: {
    path: outputPath,
    filename: outputFileName
  },
  devtool: null,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}

module.exports = config
