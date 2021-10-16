const Employee = require("./Employee");

// ensures that new Manager class will be child of Employee and retain those properties
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {

    // calls properties from Employee class
    super(name, id, email);

    // creates and assigns new property for Manager class
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  // new method of Manager class 
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
