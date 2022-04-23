const generateManager = manager => {
  return `  <div class="col-3 shadow-lg p-3 mb-5 bg-body rounded"">
    <div class=" card">
    <div class="card-header">
        <h4>${manager.getName()}</h4><h4><i class="bi bi-robot"></i>  ${manager.getRole()}</h4>
    </div>

    <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${manager.getId()}</li>
        </ul>
    <div class="card-body">
        <span class="card-text">Email: </span><a href=" mailto:${manager.getEmail()}">${manager.getEmail()}</a>
        <p class="card-text">Office number: ${manager.officeNumber}</p>
    </div>
</div>
</div>`;
};

//generate card for the engineer
const generateEngineer = engineer => {
  let htmlFinal = "";
  //loop each engineer object and each accumulate html
  Object.values(engineer).forEach(eng => {
    let htmlEngineer = `<div class="col-3 shadow-lg p-3 mb-5 bg-body rounded"">
    <div class=" card">
    <div class="card-header">
        <h4>${
          eng.name
        }</h4><h4><i class="bi bi-wrench-adjustable-circle-fill"></i> ${eng.getRole()} </h4>
    </div>

        <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${eng.getId()}</li>
        </ul>

        <div class="card-body">
        <span class="card-text">Email: </span><a href=" mailto:${eng.getEmail()}">${eng.getEmail()}</a>
        <p><span class="card-text">GitHub: </span><a href="${eng.getGithub()}" target="_blank"> ${
      eng.github
    }</a></p>

    </div>
</div>
</div>`;
    htmlFinal = htmlFinal + htmlEngineer;
  });
  return htmlFinal;
};

const generateIntern = intern => {
  let htmlFinal = "";
  Object.values(intern).forEach(int => {
    let htmlIntern = `<div class="col-3 shadow-lg p-3 mb-5 bg-body rounded"">
      <div class=" card">
      <div class="card-header">
          <h4>${
            int.name
          }</h4><h4><i class="bi bi-screwdriver"></i> ${int.getRole()} </h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${int.getId()}</li>
      </ul>    
      <div class="card-body">     
          <span class="card-text">Email: </span><a href=" mailto:${int.getEmail()}">${int.getEmail()}</a>
          <p class="card-text">School: ${int.getSchool()}</p>
      </div>
  </div>
  </div>`;
    htmlFinal = htmlFinal + htmlIntern;
  });
  return htmlFinal;
};

const generateTeam = (manager, engineer, intern) => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles2.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">

    <title>My Team</title>
</head>

<body>

    <div class="page-header bg-primary text-white p-4 mb-3 text-center">
        <h1>My Team</h1>
    </div>
    <div class="row">

    ${generateManager(manager)}
    ${generateEngineer(engineer)}
    ${generateIntern(intern)}

    </div>

</body>

</html>
    `;
};

module.exports = generateTeam;
