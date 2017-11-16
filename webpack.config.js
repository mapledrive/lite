var webpack = require('webpack');

const config = {
  entry: "./index.js",
  output: { filename: "bundle.js" },
  devtool: 'eval',
  devServer: {
	  stats: 'errors-only',
	  open: true
  },
  module: {
    loaders: [
      {  test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['react', 'env'] }  }
    ]
  }
};

module.exports = config;
