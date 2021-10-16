// importing npm packages we need
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const path = require("path");

// importing created classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// importing buildTeam function from the src folder, which contains the HTML templates we ultimately want to generate with the data we'll collect using inquirer.
const buildTeam = require("./src/buildTeam");

// creating an array to which we'll push the new employee objects we're going to create based on user input from inquirer
const team = [];

// this will be called after we collect data via all the add functions below. Arguments here assign a file name (and path), and the data we'll use to create HTML.
const createHTML = (fileName, data) => {

  // will create a file titled "index.html" in the dist folder and call buildTeam function that passes through the "team" array filled with newly created employee classes.
  fs.writeFile("./dist/index.html", buildTeam(team), (err) => {
    // catches errors, will log on terminal backend.
    if (err) {
      console.log("ERROR: ", err);
    } else {
      console.log("Creating team page.");
    }
  });
};

// this is the first function called when user initializes index.js. assumes every team will have a manager.
const addManager = () => {

  // uses inquirer package to collect user input on team members.
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
    // creates new Manager object using user's answers.
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      // pushes object to the team array.
      team.push(manager);

      // calls another function using inquirer.
      addAgain();
    });
};

const addAgain = () => {
  inquirer

  // first question after manager object is created will either lead to more questions, or, if user answers "no more employees", call the createHTML function to create the page based on what input we already have.
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
        createHTML();
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

// calls addManager() to kick everything off.
addManager();
