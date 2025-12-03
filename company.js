const fs = require("fs");

class Employee {
  constructor(id, name, position) {
    this.id = id;
    this.name = name;
    this.position = position;
  }
}

function readEmp() {
  let employees = fs.readFileSync("./employees.json", "utf8");
  let employee = JSON.parse(employees);
  let employ = employee.map(
    (emp) => new Employee(emp.id, emp.name, emp.position)
  );
  return employ;
}
// console.log(readEmp());

function readOne(id) {
  let employees = readEmp();
  let employee = employees.find((emp) => emp.id === id);
  employee ? console.log(employee) : console.log("not found");
}
// readOne(2)

function createEmp(id, name, position) {
  let employees = readEmp();
  let employee = new Employee(id, name, position);
  employees.push(employee);
  //   console.log(employees);
  const dataJSON = JSON.stringify(employees, null, 4);
  fs.writeFileSync("./employees.json", dataJSON);
  console.log("congrats");
}
// createEmp(11, "Ataturk", "Warlord");

function editEmp(id, name, position) {
  let employees = readEmp().filter((emp) => emp.id !== id);
  let employee = new Employee(id, name, position);
  employees.push(employee);
  employees.sort((a, b) => a.id - b.id);
  let dataJSON = JSON.stringify(employees, undefined, 4);
  fs.writeFileSync("./employees.json", dataJSON);
  console.log("congrats");
}
// editEmp(2, "Jerma", "Cereal Killer");

function deleteEmp(id) {
  let employees = readEmp();
  let employee = employees.filter((emp) => emp.id !== id);
  let dataJSON = JSON.stringify(employee, null, 4);
  fs.writeFileSync("./employees.json", dataJSON);
  console.log("congrats");
}

deleteEmp(11);
