const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const path = require("path");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const team=[];


const addManager = () => {
    inquirer.prompt([
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
    ])}

const employeeQuestions = [
    {
        type: "list",
        name: "addEmployee",
        message: "Add another employee to the team? Use keyboard arrows to select.",
        choices: [
            "Add Engineer",
            "Add Intern",
            "No more employees to add for now.",
        ]
    }
]
