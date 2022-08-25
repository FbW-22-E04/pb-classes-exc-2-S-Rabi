class Employee {
  constructor(id, firstname, lastname, taxId, salary) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.taxId = taxId;
    this.salary = salary;
  }
  generatePaySlip() {
    console.log(this);
  }
}

const sara = new Employee(7, "Sara", "Behnam", 2240032, 3400);
const nano = new Employee(21, "Nano", "Lewandovski", 401783, 2800);

sara.generatePaySlip();
nano.generatePaySlip();

console.log("----------------------------------");

class Manager extends Employee {
  constructor(id, firstname, lastname, taxId, salary) {
    super(id, firstname, lastname, taxId, salary);

    this.managedEmployees = [];
  }

  addManagedEmployee() {
    console.log();
  }

  removeManagedEmployee() {
    console.log(this.firstname + this.lastname);
  }
}

const john = new Manager(02, "John", "Dauer", "123344", 4000);
john.addManagedEmployee();
john.removeManagedEmployee(sara);
