class Car {
    //constructor
    constructor(engine) {
        this.engine = engine;
    }
    //function
    disp() {
        console.log("Function Displays Engine is :" + this.engine);
    }
}
//create an object
var car = new Car("XVT-1");
//access the field
console.log("Reading attribute value Engine as: " + car.engine);
//access the function
car.disp();
/**Inheritance of classes in Typescript : Example */
class Shape {
    //constructor
    constructor(a) {
        this.Area = a;
    }
}
class Circle extends Shape {
    disp() {
        console.log("Area of Circle is :" + this.Area);
    }
}
var circle = new Circle(223);
circle.disp();
//# sourceMappingURL=classes.js.map