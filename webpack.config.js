
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/jsmpeg.js',
	output: {
		path: path.join(__dirname, 'dist'),
		library: 'JSMpeg',
		libraryTarget: 'umd',
		filename: 'jsmpeg.js'
	},
	optimization: {
    minimize: false,
	},
	mode: 'production',
};