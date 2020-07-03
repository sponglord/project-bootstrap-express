const path = require('path');
const webpack = require('webpack');

// '..'' Since this config file is in the config folder we need to resolve path to the top level folder
const resolve = dir => path.resolve(__dirname, '..', dir);

module.exports = {
    entry: { 
        /**
        * This is where the `main-content` component is - src/index.js. 
        * This file contains the entrance point to our app.
        * This and any subsequent files will be parsed and output 
        * as a chunk 'main' which will be available to index.html as main.js
        */
        main: resolve('src/index.js')
    },
    output: {
        filename: '[name].js',// multiple files of [chunk name] + '.js' e.g. main.js + any other defined entry points
        path: resolve('dist'),// Folder where the webpack output will be served from
    },
    module: {
        rules: [
            {
                // This is required for parsing javascript
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('src'),
                ]
            },

            {
                // loader for Asset URLs - see: https://github.com/webpack-contrib/url-loader
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },

            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.json'],
    },
};