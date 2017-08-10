/*
* @Author: GuoSai
* @Date:   2017-08-09 22:53:35
* @Last Modified by:   Peter
* @Last Modified time: 2017-08-10 17:35:57
*/

"use strict";

// main.js
var greeter = require("./Greeter.js");
document.getElementById("root").appendChild(greeter());

//使用require导入css文件
import "./css/main.css";
import "./css/Greeter.css";
