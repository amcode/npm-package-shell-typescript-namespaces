namespace Amcode {
    export default class PrinterJob implements IPrinterJob {
        sendPrintJob(msg: string) {
            // Create Printer to print the message
            var p = new Printer();
            p.printMsg(msg);
        }
    }
}