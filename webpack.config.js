const webpack = require("webpack")

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "./dist/h.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: { presets: ['es2015', 'minify'] }
    }]
  }
};
