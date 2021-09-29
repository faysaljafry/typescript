/**
 * Type Script Abstract Classes
 * - you can make abstract class in Ts
 * - using keyword abstract
 * - abstract classes typically include one or more abstract methods
 * - the extender class must define all abstract methods in abstract class
 * -
 */
class Human {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
class male extends Human {
    constructor(name, code) {
        super(name);
        this.Id = code;
    }
    find(name) {
        //Execute AJAX request to find the name from database
        return new male(name, 2666);
    }
}
let person1 = new male("Faisal", 2666);
person1.display(); //Displays name
let person2 = person1.find("Faisal");
console.log(person2);
//# sourceMappingURL=abstract_classes.js.map