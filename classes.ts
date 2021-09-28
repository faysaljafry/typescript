class Car {
  //field
  engine: string;
  //constructor
  constructor(engine: string) {
    this.engine = engine;
  }

  //function
  disp(): void {
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
  Area: number;

  //constructor
  constructor(a: number) {
    this.Area = a;
  }
}
class Circle extends Shape {
  disp(): void {
    console.log("Area of Circle is :" + this.Area);
  }
}
var circle = new Circle(223);
circle.disp();
