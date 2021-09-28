var message = "Muhammad Faisal Jafri";
// console.log(message);
var num = 12;
// console.log(num);
var score = 45.5;
var sum = num + score;
console.log("name :" + message);
console.log("first Score:" + num);
console.log("Second Score:" + score);
console.log("Sum of Scores:" + sum);
//Type Assertion
//Type Assertion enables you to change the type of already defined
//Varible. See the example below:
var str = "1";
var str2 = str;
console.log(typeof str2);
//Infered Typing
/*
As the TS is strongly typed, but this feature is optional
TS encorages dynamic typing of variables. This means that TS allows you to
decalre a variable without mentioning its type and infer itself at runtime on
the basis of what value is assigned to it. It will find the first usage of variable
in the code and determine the type of the variable.
Please see the code below to get the idea*/
var num = 2; //data type infered as number
console.log("value of number is : " + num);
// num = "12";
// console.log(num) Cannot assign the number to string
// TS infered the type of num variable as number first. So this type casting
// will produce an error.
/*TS variable scope is of three types
1. Global scope : Global variables are defined outside programming constructs
they can be accessed from anywhere within yout code.
2. Class Scope: These variables are also called Fields. They are declared in a class
and have the scope limited to the class. They can be accessed by the object of the class
3. local Scope : Local variables are decalred within method and loops and have the limited
scope to that code block.*/
var global_num = 12; //Global Variable
class Numbers {
    constructor() {
        this.num_val = 13; //CLASS variable
    }
    storeNum() {
        var local_num = 787; // Local Variable
    }
}
Numbers.sval = 10; //static field
console.log("global Number = " + global_num);
console.log(Numbers.sval); //accessing static field with class name
var obj = new Numbers(); //making a new object of a class
console.log(obj.num_val); // accessing class scope-d variable with object referenced to that class.
//# sourceMappingURL=helloWorld.js.map