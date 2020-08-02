const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

function resolvePath (filename) {
    return path.resolve(__dirname, filename)
}

module.exports = {
    entry: resolvePath('./src/index.js'),
    output: {
        path: resolvePath('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.png/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 3000 * 1024
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({filename: resolvePath('./dist/index.html')}),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
          }),
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin('make 2020 by jw')
    ],
    devtool: 'eval-source-map',
}