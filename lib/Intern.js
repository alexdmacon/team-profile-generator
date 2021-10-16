const Employee = require("./Employee");

// ensures that new Intern class will be child of Employee and retain those properties
class Intern extends Employee {
  constructor(name, email, id, school) {
    // calls properties of Employee class
    super (name, email, id)

    // creates new property of Intern class and assigns it to this instance
    this.school = school;
  }

  // creates new methods for Intern class
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
