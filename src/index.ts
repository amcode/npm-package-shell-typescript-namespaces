import {IPrinterJob} from "./IPrinterJob"
import * as Printer from "./Printer"

    export class PrinterJob implements IPrinterJob {
        sendPrintJob(msg: string) {
            // Create Printer to print the message
            var consolePrinter = new Printer.Printer();
            consolePrinter.printMsg(msg);
        }
    }