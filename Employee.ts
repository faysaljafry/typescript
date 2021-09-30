export let age: number = 20;
export class Employee {
  empCode: number;
  empName: string;
  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }
  displayEmployee() {
    console.log(
      "Employee Code is :" +
        this.empCode +
        " and Employee name is: " +
        this.empName
    );
  }
}
let companyName: String = "NextBridge";
