`<!DOCTYPE html>
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
        <!--cards will go here-->

        

        
    </div>
    </div>

  </body>
</html>
`;

const createManager = function (manager) {
  return ` <div class="card m-3" style="width: 18rem">
<div class="card-header text-white bg-primary">
  <h2>Manager</h2>
  <h3>${manager.name}</h3>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${manager.id}</li>
  <li class="list-group-item">Email: ${manager.officeNumber}</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
</div>`;
};
