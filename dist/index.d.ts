declare namespace Amcode {
    class PrinterJob implements IPrinterJob {
        constructor();
        sendPrintJob(msg: string): void;
    }
}
