var Amcode;
(function (Amcode) {
    var PrinterJob = (function () {
        function PrinterJob() {
        }
        PrinterJob.prototype.sendPrintJob = function (msg) {
            // Create Printer to print the message
            var p = new Amcode.Printer();
            p.printMsg(msg);
        };
        return PrinterJob;
    }());
    Amcode.PrinterJob = PrinterJob;
})(Amcode || (Amcode = {}));
