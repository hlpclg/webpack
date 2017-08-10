/*
* @Author: GuoSai
* @Date:   2017-08-09 22:53:15
* @Last Modified by:   Peter
* @Last Modified time: 2017-08-10 17:33:56
*/

"use strict";


var config = require("./config.json");

module.exports = function() {
    var greet = document.createElement("div");
    greet.className = "root";
    greet.textContent = config.greetText;
    return greet;
};