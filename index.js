const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const path = require("path");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const writeHTML = require("./src/writeHTML");

const team = [];

const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the name of this team's manager.",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's employee ID number.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email adddress.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office phone number.",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );

      team.push(manager);

      addAgain();
    });
};

const addAgain = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message:
          "Add another employee to the team? Use keyboard arrows to select.",
        choices: [
          "Add Engineer",
          "Add Intern",
          "No more employees to add for now.",
        ],
      },
    ])
    .then((answers) => {
      answer = answers.addEmployee;
      // console.log(answer);
      if (answer === "Add Engineer") {
        addEngineer();
      } else if (answer === "Add Intern") {
        addIntern();
      } else {
        return;
        //need to write something here that will not just return but write file/generate HTML with whatever we've inputted to this point. I guess this is where we'll call a write FS function eventually.
      }
    });
    // console.log(team);
};

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the employee's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's ID number.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's email address.",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub account name.",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(engineer);
      addAgain();
    });
};

const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the employee's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's ID number.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's email address.",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school or recent alma mater.",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(intern);
      addAgain();
    });
};

addManager();
