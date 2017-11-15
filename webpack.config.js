var webpack = require('webpack');

const config = {
  entry: "./index.js",
  output: { filename: "bundle.js" },
  devtool: 'eval',
  module: {
    loaders: [
      {  test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['react', 'env'] }  }
    ]
  }
};

module.exports = config;
