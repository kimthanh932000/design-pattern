/*
### Definition of Singleton Pattern
The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to it.
It restricts the instantiation of a class to a single object, which can be shared throughout the application.

### When to Use It
- **Shared Resource Access**: Use it when there should be a single access point to a resource or service throughout the application, like a database connection or a configuration manager.
- **Controlled Access and State Management**: When you need to manage the state or operations of a single instance, such as a logging service or a cache.
- **Global Access**: When an object needs to be available globally across different parts of the application.

### How to Use It
1. **Private Constructor**: Make the class constructor private to prevent direct construction calls with the `new` operator.
2. **Static Method**: Provide a static method that gives a way to access the instance of the class.
3. **Lazy Instantiation**: Optionally, create the instance of the class only when it is needed for the first time.
4. **Ensure Single Instance**: Ensure that only one instance of the class exists and provide a global access point to that instance.
*/

export class Database {
    private static instance: Database;

    private constructor() {}

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
