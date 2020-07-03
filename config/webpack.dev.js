require('dotenv').config();
const path = require('path');
// const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const expressServer = require('../server');
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '8020';

// '..'' Since this config file is in the config folder we need to resolve path to the top level folder
const resolve = dir => path.resolve(__dirname, '..', dir);

module.exports = merge(webpackConfig, {
    mode: 'development',
    // ref: https://webpack.js.org/configuration/dev-server/
    devServer: {
        before: app => expressServer(app),
        host,// The url you want the webpack-dev-server to use for serving files.
        port,// Port: Browser location will be localhost:8020
        inline: true,
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/,
            poll: true,
        },
        contentBase: './dist',// For static assets - including index.html, which is the start page containing the <div> with the id "app"
        publicPath: '/build/',// The path you want webpack-dev-server to use for serving files
        https: false,
        // If setting https to true...
        // key: fs.readFileSync('/path-to-self-signed-cert/server.key);
        // cert: fs.readFileSync('/path-to-self-signed-cert/server.crt);
        // ca: fs.readFileSync('/path-to-self-signed-cert/ca.pem);
        compress: true,
        // Seems this is necessary if your 'index' file is called anything other than index.html
        /*historyApiFallback: {
            index: 'start.html'
        },*/
    },
    plugins: [
        new webpack.NamedModulesPlugin(),// Do we need this?
        // Exchanges, adds, or removes modules while an application is running, without a full reload.
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            // Place to define vars accessible in modules via process.env.VAR_NAME
            // i.e a way to extract vars from the .env file and make them available to modules
            'process.env': {
                __PORT: JSON.stringify(process.env.PORT)// available in any module as process.env.__PORT
            }
        })
    ],
    devtool: 'source-map'
});