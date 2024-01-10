interface Shape {
    clone(): Shape;
}

class Rectangle implements Shape {
    width: number = 0;
    height: number = 0;
    color: string = '';

    constructor(source?: Rectangle) {
        if (source) {
            this.width = source.width;
            this.height = source.height;
            this.color = source.color;
        }
    }

    clone(): Rectangle {
        return new Rectangle(this);
    }
}

class Circle implements Shape {
    radius: number = 0;
    color: string = '';

    constructor(source?: Circle) {
        if (source) {
            this.radius = source.radius;
            this.color = source.color;
        }
    }

    clone(): Shape {
        return new Circle(this);
    }
}

export {
    Rectangle,
    Circle
}