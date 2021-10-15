const buildManager = (manager) => {
  return ` <div class="card m-3" style="width: 18rem">
<div class="card-header text-white bg-primary">
  <h2>Manager</h2>
  <h3>${manager.getName()}</h3>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${manager.getId()}</li>
  <li class="list-group-item">Email: ${manager.getEmail()}</li>
  <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
</ul>
</div>`;
};

const buildEngineer = (engineer) => {
  return ` <div class="card m-3" style="width: 18rem">
    <div class="card-header text-white bg-primary">
      <h2>Engineer</h2>
      <h3>${engineer.getName()}</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: ${engineer.getEmail()}</li>
      <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
    </ul>
    </div>`;
};

const buildIntern = (intern) => {
  return ` <div class="card m-3" style="width: 18rem">
    <div class="card-header text-white bg-primary">
      <h2>Intern</h2>
      <h3>${intern.getName()}</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: ${intern.getEmail()}</li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
    </div>`;
};

const buildTeam = (team) => {

  cardArray = [];
  
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
  const cards = cardArray.join("");

  // can maybe just call writeHTML here
  const createTeam = writeHTML(cards);
  return createTeam;
};

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
      <body>
        <div class="container-fluid jumbotron bg-primary">
          <h1 class="text-center text-white">The Best Team in the World</h1>
        </div>
        <div class="container">
          <div class="row justify-content-around">


            ${cards};



        </div>
        </div>
    
      </body>
    </html>
    `;
}

module.exports = buildTeam;