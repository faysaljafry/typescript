/**Getter and setter are used to get and set the value of class attributes.
 * They are declared as functions with one extra keyword (get, set);
 * Following example with getter and setter will help you alot in understanding the concept.
 */

class Person {
  public _age: number;
  public _firstName: string;
  public _lastName: string;

  //function to get age
  public get age() {
    return this._age;
  }
  //function to get Firt Name
  public get firstName() {
    return this._firstName;
  }
  //function o set first name
  public set firstName(name: string) {
    if (!name) {
      throw new Error("Invalid First name...");
    }
    this._firstName = name;
  }
  // funtion to get last name
  public get lastName() {
    return this._lastName;
  }
  //function to set last name
  public set latName(name: string) {
    if (!name) {
      throw new Error("Invalid Last Name");
    }
    this._lastName = name;
  }
  // function to set age
  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("The age is invalid...");
    }
    this._age = theAge;
  }
  //funtion to get full name
  public get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
  //function to set full name
  public set fullName(name: string) {
    let parts = name.split(" ");
    if (parts.length != 2) {
      throw new Error("Invalid name Foramt: first last");
    }
    this._firstName = parts[0];
    this._lastName = parts[1];
  }
}
let person = new Person();
person.age = 10;
console.log(person.age);
person.fullName = "Muhammad Faisal";
console.log(person.fullName);
