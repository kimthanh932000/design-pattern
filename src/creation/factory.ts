/*
### Definition of Factory Pattern
The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass,
but allows subclasses to alter the type of objects that will be created.
Essentially, it delegates the instantiation of objects to child classes.

### When to Use It
- **Decoupling Object Creation**: Use it when the creation logic should be separate from the main logic of the application.
- **Dynamic Object Creation**: When the exact type of objects to create can vary and be decided at runtime.
- **Extensibility**: It's useful when the system should be open to adding new types of objects, adhering to the same interface.
- **Complex Initialization**: When object creation involves complex logic or dependencies.

### How to Use It
1. **Define an Interface or Abstract Class**: This will represent the type of objects the factory will create.
2. **Implement Concrete Classes**: Create several classes that implement this interface or abstract class.
3. **Create Factory Class/Method**: This will determine which class to instantiate based on input or configuration.
4. **Client Code Uses Factory**: Instead of instantiating objects directly, the client code calls the factory method,
providing necessary information for deciding which object to create.*/
export interface IPaymentProcessor {
    processPayment(amount: number): void;
}

class PaypalPaymentProcessor implements IPaymentProcessor{
    processPayment(amount: number): void {
        console.log(`Processing ${amount} using Paypal...`);
    }
}

class CreditCardPaymentProcessor implements IPaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing ${amount} using credit card...`);
    }
}

export class PaymentProcessorFactory {
    static createPaymentProcessor(type: string): IPaymentProcessor {
        if (type === 'Paypal') {
            return new PaypalPaymentProcessor();
        } else if (type === 'Credit Card') {
            return new CreditCardPaymentProcessor();
        } else {
            throw new Error('Unsupported payment method');
        }
    }
}