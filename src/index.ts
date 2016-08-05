namespace Amcode {
    export class PrinterJob implements IPrinterJob {
        constructor() {
            console.log('constructor call on Printer Job');
        }
        sendPrintJob(msg: string) {
            var p = new Printer();
            p.printMsg(msg);
        }
    }
}