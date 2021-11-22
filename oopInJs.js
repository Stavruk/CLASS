/**
 * Documentation
 * Створіть новий файл oopInJs.js і використовуйте його 
 * для  того, щоб попрацювати із класами JS і функціями 
 * конструкторами. Ви можете створити батьківський клас 
 * Animal і використовувати його для створення інших 
 * тварин (Cat, Dog, Mouse, Horse тощо). Даний код 
 * повинен бути доступним у вашому GitHub репозиторії, 
 * який ви створювали для тренінга
 */

class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    calcArea() { }
    printShape() {
        return "This is Shape, color is: ", this.shapeColor;
    }
}

class Triangle extends Shape {
    constructor(shapeColor, a, b, c) {
        super(shapeColor)
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calcArea() {
        let p = (this.a + this.b + this.c) / 2;
        return "triangleArea = " + (Math.pow(p * (p - this.a) * (p - this.b) * (p - this.c), 0.5)).toFixed(3);
    }
    printShape() {
        console.log("This is Triangle, color is: ", this.shapeColor);
    }
}

class Circle extends Shape {
    constructor(shapeColor, radius) {
        super(shapeColor);
        this.radius = radius;
    }

    calcArea() {
        return "circleArea = " + (Math.PI * Math.pow(this.radius, 2)).toFixed(3);
    }
    printShape() {
        console.log("This is Circle, color is: ", this.shapeColor);
    }
}
class Rectangle extends Shape {
    constructor(shapeColor, width, height) {
        super(shapeColor);
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return "rectangleArea = " + (this.width * this.height).toFixed(3);
    }
    printShape() {
        console.log("This is Rectangle, color is: ", this.shapeColor);
    }
}


const triangle1 = new Triangle("blue", 4, 5, 2);
const triangle2 = new Triangle("orange", 10, 8, 15);
const triangle3 = new Triangle("red", 5, 5, 5);

const circle1 = new Circle("grey", 5);
const circle2 = new Circle("purple", 9);
const circle3 = new Circle("green", 15);

const rectangle1 = new Rectangle("yellow", 10, 15);
const rectangle2 = new Rectangle("white", 1, 2);
const rectangle3 = new Rectangle("black", 10, 15);

triangle1.printShape();
console.error(triangle1.calcArea());
triangle2.printShape();
console.error(triangle2.calcArea());
triangle3.printShape();
console.error(triangle3.calcArea() + "\n");

circle1.printShape();
console.error(circle1.calcArea());
circle2.printShape();
console.error(circle2.calcArea());
circle3.printShape();
console.error(circle3.calcArea() + "\n");

rectangle1.printShape();
console.error(rectangle1.calcArea());
rectangle2.printShape();
console.error(rectangle2.calcArea());
rectangle3.printShape();
console.error(rectangle3.calcArea() + "\n");