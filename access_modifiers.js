/**
 * Type Script - data modifiers
 * Three types of Access Modifiers in TS
 * -Public
 * -Protected
 * -Private
 */
/**By default, all members of a class in typescript are public. All the public members
 * can be accessed anywhere without ay restrictions.
 */
class Employee {
}
let emp = new Employee();
emp.empCode = "2666"; //Accessing public outside class with reference of class object.
emp.empName = "Muhammad Faisal";
console.log(emp);
/**
 * Private: The private access modifier ensures that class members are visible
 * only to that class and are not accessible outside the class.
 */
class Laborer {
}
let Lab1 = new Laborer();
Lab1.lab_name = "Faisal"; //OK
//Lab1.LabCode = "123323"; //will give error
/**Protected :
 * The protected access modifier is similar to the private access modifier,
 * except that protected members can be accessed using their deriving classes.
 *
 */
class Student {
    constructor(name, no) {
        this.name = name;
        this.rollNo = no;
    }
}
class BBAStudent extends Student {
    constructor(name, code, department) {
        super(name, code);
        this.department = department;
    }
}
let student = new BBAStudent("Muhammad Faisal", "12354", "Business");
//student.rollNo;     //Compile error
//# sourceMappingURL=access_modifiers.js.map