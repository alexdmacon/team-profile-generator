// imports Employee class
const Employee = require("./Employee");

// ensures that new Engineer class will be child of Employee and retain those properties
class Engineer extends Employee {
  constructor(name, id, email, github) {

    //calls properties from Employee class
    super(name, id, email);

    // creates new property of Engineer class
    this.github = github;
  }

  // creating new methods of Engineer class
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
