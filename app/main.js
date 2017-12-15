/*
* @Author: GuoSai
* @Date:   2017-08-09 22:53:35
* @Last Modified by:   Peter
* @Last Modified time: 2017-12-15 18:00:54
*/

"use strict";
//使用require导入css文件
import "./css/main.scss";

try {
    window.$ = window.jQuery = require("jquery");
    require("bootstrap");
} catch (e) {
    console.info(e);
}

// main.js
var greeter = require("./Greeter.js");
greeter();

