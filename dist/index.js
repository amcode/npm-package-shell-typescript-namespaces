"use strict";
var Printer = require("./Printer");
var PrinterJob = (function () {
    function PrinterJob() {
    }
    PrinterJob.prototype.sendPrintJob = function (msg) {
        // Create Printer to print the message
        var consolePrinter = new Printer.Printer();
        consolePrinter.printMsg(msg);
    };
    return PrinterJob;
}());
exports.PrinterJob = PrinterJob;
