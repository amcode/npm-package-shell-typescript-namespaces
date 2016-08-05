namespace Amcode {
    export class Printer implements IPrinter {
        constructor() {
            console.log('constructor call on Printer');
        }
        printMsg(msg: string) {
            console.log("PRINT MSG:" + msg);
        }
    }

}