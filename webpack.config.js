var webpack = require('webpack');

const config = {
  entry: "./client.js",
  output: { filename: "client.min.js" },
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
