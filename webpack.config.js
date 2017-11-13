var webpack = require('webpack');

const config = {
  entry: "./index.js",
  output: { filename: "bundle.js" },
  module: {
    loaders: [
      {  test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['react', 'env'] }  }
    ]
  }
};

module.exports = config;
