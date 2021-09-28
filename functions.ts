/*Fuctioins are building blocks of readable , mainatainable and re-useable code
 */
//defining a function
function test() {
  //function definition
  console.log("A function was called.");
}
test();

//Optional parameters
/*Optional Parameters
optional parameters can be used when arguments need not be cumposirily passed
A parameter can be marked optional by appending a question mark, as follow: */
function disp_details(id: number, name: string, mail_id?: string) {
  console.log("ID is :", id);
  console.log("name is :", name);
  if (mail_id) {
    console.log("email id: ", mail_id);
  }
}
disp_details(123, "Faisal");
disp_details(131, "Muhammad", "faysaljafry@gmail.com");

/* Rest Parameters: 
They are similar to variable arguments in java. It doesnt restrict the number of 
values that you can pass to a function. However, the values passed must be all of
same types. In other words, rest parameters act as placehlolder for multiple arguments
of the same type. 
To declare rest parameters, the parameter name is refixed with three periods. Any nonrest
parameter should come before the rest parameter.
It passes all the arguments in any array and perform accordingly. */
function addNumber(...nums: number[]) {
  var i;
  var sum: number = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log("Sum of the number, using Rest Parameters is: ", sum);
}

addNumber(1, 2, 3);
addNumber(10, 12, 12, 12, 12, 12, 12, 12, 12);

/*Default parameters: are the values to parameters, which are used in functions by defualt if no parameters are
passed replacing them. If the values are passed, it gets overwitten */

function calculate_discount(price: number, rate: number = 0.5) {
  var discount = price * rate;
  console.log("Discount account: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.3);
/**Anonymous Functions:
 * functions that are not bound to an identifier are called anonymous functions.
 * These functions are dynamically declared at runtime. Anonymous functions can accept inputs and return outputs.
 * They are not accessible after its initial creation.
 * Syntax:    var res = function( [arguments]) {...}
 */
var msg = function () {
  return "Hello from anonymous function...";
};
console.log(msg());
/**Anonymous functions with parameters */
var res1 = function (a: number, b: number) {
  return a * b;
};
console.log(
  "The sum of parameters passed to anonymous function are:",
  res1(12, 54)
);

/**The function constructor:
 * Like javascriptm, TS supports defining a function with built-in javascript constructor
 * called Function()
 */
var myFunction = new Function("a", "b", "return a*b");
var x = myFunction(4, 4);
console.log("The output of the constructor funcstion is :", x);

/**Recusrsio and Typescript Functions:
 * Recursion is a technique for iterating over an operation by having a function call to itself
 * repeatedly until it arrives at a result. Recursion is best applied when you need to call the same
 * function repeatedly with different parameters from within a loop.
 *
 */
function factorial(number: number) {
  if (number <= 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
console.log("The factorial of the number in TS code: ", factorial(6));

//Anonymous recursive Function
(function () {
  var x = "Hello !!";
  console.log(x);
})();

//Overloading of Functions

function disp(s1: string): void;
function disp(n1: number, s1?: string): void;

function disp(x: any, y?: any): void {
  console.log(x), console.log(y);
}
disp("abc");
disp(1, "xyz");
