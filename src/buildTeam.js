// passing through "team" array created using inquirer over on index.js.
const buildTeam = (team) => {

  // creates new array to store HTML cards being created in this script.
  cardArray = [];

  // for loop that cycles through "team" array to match employee objects with corresponding card creation function. pushes those newly created HTML cards into the cardArray. There must be a cleaner way to write this using .map and .forEach methods, which I will try and figure out later when I have more time.
  for (let i = 0; i < team.length; i++) {
    const employee = team[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const manager = buildManager(employee);

      cardArray.push(manager);
    }

    if (role === "Engineer") {
      const engineer = buildEngineer(employee);

      cardArray.push(engineer);
    }

    if (role === "Intern") {
      const intern = buildIntern(employee);

      cardArray.push(intern);
    }
  }

  // takes objects containing individual HTML cards in array and concatenates them into one string, which will be easier to place in HTML for main page.
  const cards = cardArray.join("");

  // passes that string of HTML cards into the writeHTML function, which will do what it sounds like it's going to do.
  return writeHTML(cards);
};


// next few functions create employee cards using data passed from buildTeam().
const buildManager = (manager) => {
  return ` <div class="card m-3" style="width: 18rem">
<div class="card-header-1">
  <h4>Manager</h4>
  <h2>${manager.getName()}</h2>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${manager.getId()}</li>
  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
  <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
</ul>
</div>`;
};

const buildEngineer = (engineer) => {
  return ` <div class="card m-3" style="width: 18rem">
    <div class="card-header-2">
      <h4>Engineer</h4>
      <h2>${engineer.getName()}</h2>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/">${engineer.getGithub()}</a></li>
    </ul>
    </div>`;
};

const buildIntern = (intern) => {
  return ` <div class="card m-3" style="width: 18rem">
    <div class="card-header-3">
      <h4>Intern</h4>
      <h2>${intern.getName()}</h2>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
    </div>`;
};


// template for the HTML that will generate our final team page.
const writeHTML = (cards) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Your Team's Profile</title>
      </head>
      <body class="background">
        <div class="container-fluid jumbotron header">
          <h1 class="text-center">The Best Team in the World</h1>
        </div>
        <div class="container">
          <div class="row justify-content-around">


            ${cards}



        </div>
        </div>
    
      </body>
    </html>
    `;
};

// exports the buildTeam function, which we'll need over on index.js
module.exports = buildTeam;
