const plugins = require('./plugins');
const loaders = require('./loaders');
const path = require('path');

module.exports = {
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			constants: path.resolve('./src/constants'),
			styles: path.resolve('./src/styles'),
		}
	},
	plugins: [plugins.HardSourceWebpackPlugin, plugins.HtmlWebpackPlugin],
	module: {
		rules: [loaders.BabelLoader]
	}
};
