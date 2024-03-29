const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base');

const config = {
  // Inform webpack that we're building a bundle
  // for Node.js rather than for the borwser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Not include in the bundle any library that already exists in node_modules
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
