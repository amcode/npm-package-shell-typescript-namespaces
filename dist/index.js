var Amcode;
(function (Amcode) {
    var PrinterJob = (function () {
        function PrinterJob() {
            console.log('constructor call on Printer Job');
        }
        PrinterJob.prototype.sendPrintJob = function (msg) {
            var p = new Amcode.Printer();
            p.printMsg(msg);
        };
        return PrinterJob;
    }());
    exports.default = PrinterJob;
})(Amcode || (Amcode = {}));
