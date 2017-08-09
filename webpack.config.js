/*
* @Author: GuoSai
* @Date:   2017-08-09 23:49:35
* @Last Modified by:   Peter
* @Last Modified time: 2017-08-10 01:37:32
*/

"use strict";


module.exports = {
    devtool: "eval-source-map", //配置生成Source Maps，选择合适的选项 {1.source-map:[在一个单独的文件中产生一个完整且功能完全的文件]速度慢, 2.cheap-module-source-map:[在一个单独的文件中生成一个不带列映射的map]<不带列映射,提高速度>, 3:eval-source-map{使用eval打包源文件模块，在同一个文件中生成干净的完整的source map}<速度快、利于调试,输出的js文件具有性能和安全的隐患;建议开发用>:, 4,cheap-module-eval-source-map{速度快,没有列映射}<速度最快>}
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    }
};