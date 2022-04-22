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
        <div class="col-3 shadow-lg p-3 mb-5 bg-body rounded"">
            <div class=" card">
            <div class="card-header">
                <h4>${manager.name}</h4><p><i class="bi bi-robot"></i>  Manager</p>
            </div>
            <div class="card-body">
                <p class="card-text">Id:</p>
                <p class="card-text">Email:</p>
                <p class="card-text">Office number:</p>
            </div>
        </div>
    </div>
    <div class="col-3 shadow-lg p-3 mb-5 bg-body rounded"">
        <div class=" card">
        <div class="card-header">
            <h4><i class="bi bi-wrench-adjustable-circle-fill"></i> Engineer</h4>
        </div>
        <div class="card-body">
            <p class="card-text">Id:</p>
            <p class="card-text">Email:</p>
            <p class="card-text">GitHub:</p>
        </div>
    </div>
    </div>
    <div class="col-3 shadow-lg p-3 mb-5 bg-body rounded"">
        <div class=" card">
        <div class="card-header">
            <h4><i class="bi bi-screwdriver"></i>Intern</h4>
        </div>
        <div class="card-body">
            <p class="card-text">Id:</p>
            <p class="card-text">Email:</p>
            <p class="card-text">School:</p>
        </div>
    </div>
    </div>
    </div>

</body>

</html>
    `;
};

module.exports = generateTeam;
