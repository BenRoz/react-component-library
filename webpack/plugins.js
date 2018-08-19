const _HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const _HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HardSourceWebpackPlugin = new _HardSourceWebpackPlugin();

const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
	template: path.resolve('./src/index.html'),
	minify: {collapseWhitespace: true}

});


module.exports={
    HardSourceWebpackPlugin, HtmlWebpackPlugin
}