/*
### Definition
The Composite Design Pattern is a structural pattern that allows you to compose objects into tree structures to represent part-whole hierarchies.
It enables clients to treat individual objects (leaf nodes) and compositions of objects (composite nodes) uniformly.

### Pros
1. **Uniformity**: Treats single and composite elements uniformly, simplifying client code.
2. **Flexibility**: Easy to add new types of components without changing existing code.
3. **Clarity**: Provides a clear tree structure, ideal for part-whole relationships.
4. **Scalability**: Simplifies the process of adding new components to the system.

### Cons
1. **Overgeneralization**: Can make the design overly general, complicating the component interface.
2. **Opaque Composition**: Clients may have difficulties treating individual objects and compositions differently when required.
3. **Increased Complexity**: Introduces complexity into the tree structure, which can be overkill for simple structures.

### How and When to Use
- **Use when**: You're dealing with part-whole hierarchies where you want to treat individual objects and compositions of objects in a similar manner.
- **How to Implement**: Define a common component interface for both simple (leaf) and complex (composite) objects. Leaf nodes represent end objects, and composite nodes maintain a group of child components, which can be either leaf or composite.
- **Ideal Scenarios**:
- Representing hierarchical structures like graphical user interfaces, file systems, or organizational structures.
- Building systems where it's necessary to work with objects and compositions of objects uniformly.
*/

interface Component {
    display(): void;
}

export class AFile implements Component{
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log(`File: ${this.name}`);
    }
}

export class Folder implements Component{
    private name: string;
    private children: Component[] = [];

    constructor(name: string) {
        this.name = name;
    }

    add(component: Component): void {
        this.children.push(component);
    }

    remove(component: Component): void {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    display(): void {
        console.log(`Folder: ${this.name}`);
        this.children.forEach(child => child.display());
    }
}