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
  //   generatePaySlip() {
  //     console.log(
  //       `${this.id} ${this.firstname} ${this.lastname} ${this.taxId} ${this.salary}`
  //     );
  //   }
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

  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
  }

  removeManagedEmployee(employee) {
    this.managedEmployees = this.managedEmployees.filter(
      (item) => item.id !== employee.id
    );
  }
}

const manager1 = new Manager(02, "John", "Dauer", "123344", 4000);

const liza = new Employee(244, "liza", "Dauer", "145344", 4000);

const thili = new Employee(24, "Thili", "Pn", "14544", 6000);

const rami = new Employee(244, "Rami", "AS", "14544", 6000);

manager1.addManagedEmployee(liza);
manager1.addManagedEmployee(thili);
manager1.addManagedEmployee(rami);
console.log(manager1);
manager1.removeManagedEmployee(thili);
console.log(manager1);
