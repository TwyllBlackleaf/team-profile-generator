function generateManager(manager) {
const managerHTML =  `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card">
                    <div class="card-header bg-info">
                        <h5 class="card-title bg-info text-light">${manager.getName()}</h5>
                        <h6 class="card-subtitle bg-info text-light">${manager.getRole()}</h6>
                    </div>
                    <div class="card-body">
                        <p class="card-text"> ID: ${manager.getId()}<p>
                        <p class="card-text"> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                        <p class="card-text"> Office Number: ${manager.getOfficeNumber()}</p>
                    </div>
                </div>
            </div>
`
return managerHTML;
}

function generateEngineers(engineers) {
    var engineersHTML = ``;

    engineers.forEach(engineer => {
        engineersHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card">
                    <div class="card-header bg-info">
                        <h5 class="card-title bg-info text-light">${engineer.getName()}</h5>
                        <h6 class="card-subtitle bg-info text-light">${engineer.getRole()}</h6>
                    </div>
                    <div class="card-body">
                        <p class="card-text"> ID: ${engineer.getId()}<p>
                        <p class="card-text"> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                        <p class="card-text"> GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
                    </div>
                </div>
            </div>
`
    });

    return engineersHTML;
    
}

function generateInterns(interns) {
    var internsHTML = ``;

    interns.forEach(intern => {
        internsHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card">
                    <div class="card-header bg-info">
                        <h5 class="card-title bg-info text-light">${intern.getName()}</h5>
                        <h6 class="card-subtitle bg-info text-light">${intern.getRole()}</h6>
                    </div>
                    <div class="card-body">
                        <p class="card-text"> ID: ${intern.getId()}<p>
                        <p class="card-text"> Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                        <p class="card-text"> School: ${intern.getSchool()}</p>
                    </div>
                </div>
            </div>      
`
    })

    return internsHTML;
}

function generateHTML(manager, engineers, interns) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        h1 {
            padding: 10px 0;
            margin-bottom: 20px;
        }
        .card {margin-bottom: 15px;}
    </style>
    <title>Team Profile</title>
</head>
<body>
    <header class="bg-secondary text-light text-center">
        <h1 class="bg-secondary">My Team</h1>
    </header>
    <main class="container">
        <div class="row">
            ${generateManager(manager)}
            ${generateEngineers(engineers)}
            ${generateInterns(interns)}
        </div>
    </main>
</body>
</html>`;
}

module.exports = generateHTML;