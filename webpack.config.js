var path = require('path');
var webpack = require('webpack');

/*
    yarn init
    touch index.js
    touch webpack.config.js
    yarn add global add webpack
    yarn add babel-core babel-loader babel-preset-es2015 --dev
    yarn add webpack --dev
    webpack
*/

module.exports = {
    entry: './index.js',
    output: {
        //path: '/Users/admin/Documents/webpack-pratice/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader:"babel-loader",
                options:{
                    presets:["es2015"]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}