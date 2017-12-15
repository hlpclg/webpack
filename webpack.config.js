/*
 * @Author: GuoSai
 * @Date:   2017-08-09 23:49:35
 * @Last Modified by:   Peter
 * @Last Modified time: 2017-12-15 17:55:55
 */

"use strict";

//一个常见的Webpack配置文件
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: "eval-source-map", //配置生成Source Maps，选择合适的选项 {1.source-map:[在一个单独的文件中产生一个完整且功能完全的文件]速度慢, 2.cheap-module-source-map:[在一个单独的文件中生成一个不带列映射的map]<不带列映射,提高速度>, 3:eval-source-map{使用eval打包源文件模块，在同一个文件中生成干净的完整的source map}<速度快、利于调试,输出的js文件具有性能和安全的隐患;建议开发用>:, 4,cheap-module-eval-source-map{速度快,没有列映射}<速度最快>}
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build/",
        filename: "js/app.js"
    },

    module: {
        loaders: [
            {
                test:require.resolve("jquery"),
                loader:"expose-loader?$!expose-loader?jQuery"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader?modules!postcss-loader'
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?module!postcss-loader"
                })
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader?module!postcss-loader"
                })
            },
        ],
        
    },
    plugins: [
        require("autoprefixer"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Popper: ["popper.js", "default"]
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html",
            filename: "index.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
};


