const path = require('path');
var glob_entries = require('webpack-glob-entries');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: glob_entries('./src/js/*.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost/webpack'
            },
            {
                reload: true
            }
        )
    ]
};
