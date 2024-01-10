/* Composite */
/*import {AFile, Folder} from './src/composite';

const root = new Folder('root');
const folder1 = new Folder('folder 1');
const folder2 = new Folder('folder 2');

const file1 = new AFile('file 1');
const file2 = new AFile('file 2');
const file3 = new AFile('file 3');

folder1.add(file1);
folder2.add(file2);

root.add(file3);
root.add(folder1);
root.add(folder2);

root.display();*/

/* Factory */
/*
import {PaymentProcessorFactory, IPaymentProcessor} from "./src/creation/factory";

let paymentProcessor: IPaymentProcessor;

paymentProcessor = PaymentProcessorFactory.createPaymentProcessor('Paypal');
paymentProcessor.processPayment(500);

paymentProcessor = PaymentProcessorFactory.createPaymentProcessor('Credit Card');
paymentProcessor.processPayment(203.5);*/

/* Singleton */
/*import {Database} from "./src/creation/singleton";
const instance1 = Database.getInstance();
const instance2 = Database.getInstance();
console.log(instance1 === instance2);*/

/* Prototype */
/*
import {Rectangle, Circle} from "./src/creation/protptype";
const rect = new Rectangle();
rect.width = 10;
rect.height = 20;
rect.color = 'black';

const anotherRect = rect.clone();
anotherRect.color = ' red';
console.log(anotherRect)
*/