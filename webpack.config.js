const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Set development mode to 'DEVELOPMENT' change to 'PRODUCTION' for release
  mode: 'development',
  // Set the app entry point to ./src/index.js
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // Configure build parameters including output directory and output filename
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  /**
   * Configure build rules for module.
   * This checks for JSX files, excludes the /node_modules/ directory from the build,
   * and sets the babel presets to be used in the project.
   */
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  // Ensures that webpack can detect all filetypes, not just vanilla JavaScript source files.
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  // Add the HtmlWebpackPlugin to the build, and specify which html file to bundle with.
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })
  ]
};
