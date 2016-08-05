var Amcode;
(function (Amcode) {
    var Printer = (function () {
        function Printer() {
            console.log('constructor call on Printer');
        }
        Printer.prototype.printMsg = function (msg) {
            console.log("PRINT MSG:" + msg);
        };
        return Printer;
    }());
    Amcode.Printer = Printer;
})(Amcode || (Amcode = {}));
