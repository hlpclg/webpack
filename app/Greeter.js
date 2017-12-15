/*
* @Author: GuoSai
* @Date:   2017-08-09 22:53:15
* @Last Modified by:   Peter
* @Last Modified time: 2017-12-15 17:59:52
*/

"use strict";


// var config = require("./config.json");
require("jquery");


module.exports = function() {
    var greet = {
        aa() {
            console.info("arguments");
        },
        demo() {
            $('#modal-1').modal('show');
            // return $("body");
            console.info('323');
        }
    };
    greet.aa();
    greet.demo();
    // var greet = document.createElement("div");
    // greet.className = "root";
    // greet.textContent = config.greetText;
    return greet;
};