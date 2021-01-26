const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    entry: path.resolve(__dirname, 'src', 'client', 'client.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
};

module.exports = merge(baseConfig, config);