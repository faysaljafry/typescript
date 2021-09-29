/**
 * Type Script Abstract Classes
 * - you can make abstract class in Ts
 * - using keyword abstract
 * - abstract classes typically include one or more abstract methods
 * - the extender class must define all abstract methods in abstract class
 * -
 */
abstract class Human {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(this.name);
  }
  abstract find(name: string): Human;
}
class male extends Human {
  Id: number;
  constructor(name: string, code: number) {
    super(name);
    this.Id = code;
  }
  find(name: string): Human {
    //Execute AJAX request to find the name from database
    return new male(name, 2666);
  }
}
let person1: Human = new male("Faisal", 2666);
person1.display(); //Displays name

let person2: Human = person1.find("Faisal");
console.log(person2);
