// const plugins = require('./plugins');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BabelLoader = {
	options: {
		cacheDirectory: true
	},
	test: /\.(js|jsx)$/,
	exclude: [/node_modules/],
	loader: 'babel-loader'
};

// const ImageLoader = {
// 	test: /\.(png|jp(e*)g|svg)$/,
// 	use: [{
// 		loader: 'url-loader',
// 		options: {
// 			limit: 8000, // Convert images < 8kb to base64 strings
// 			name: 'images/[hash]-[name].[ext]'
// 		}
// 	}]
// };

// const CSSLoader =  {
// 	test: /\.css$/,
// 	use: [
// 		MiniCssExtractPlugin.loader,
// 		"css-loader"
// 	]
// };

module.exports = {
	BabelLoader
};
