const base = require('./base')
const merge = require('webpack-merge')

module.exports= merge(base, {mode: 'production'});
 