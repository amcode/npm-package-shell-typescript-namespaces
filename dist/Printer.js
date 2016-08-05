"use strict";
var Printer = (function () {
    function Printer() {
        console.log('constructor call on Printer');
    }
    Printer.prototype.printMsg = function (msg) {
        console.log("PRINT MSG:" + msg);
    };
    return Printer;
}());
exports.Printer = Printer;
