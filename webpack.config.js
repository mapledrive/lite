var webpack = require('webpack');

const config = {
  entry: "./index.js",
  output: { filename: "bundle.js" },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
};

module.exports = config;
