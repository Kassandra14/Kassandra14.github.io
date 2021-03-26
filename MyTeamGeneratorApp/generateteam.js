const generateTeam = Team => {
    const createManager = Manager => {
        return `
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <div class="card-header" class="manager" style="background:#5F9EA0; color:blanched almond;">
                    ${Manager.getName()} <br>
                        Manager
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" class="id">ID: ${Manager.getId()}</li>
                        <li class="list-group-item" class="email"> email: ${Manager.getEmail()}</li>                    
                        <li class="list-group-item" class="officeNum">office: ${Manager.getManagerOffice()} </li>
                    </ul>
                </div>
            </div> `
    };

    const createEngineer = Engineer => {
    return `
    <div class="col-md-4">
        <div class="card" style="width: 18rem;">
            <div class="card-header" class="manager" style="background:#5F9EA0; color:blanched almond;">
                ${Engineer.getName()} <br>
                    Engineer
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" class="id">ID: ${Engineer.getId()}</li>
                    <li class="list-group-item" class="email"> email: ${Engineer.getEmail()}</li>                    
                    <li class="list-group-item" class="gitUser">gitHub: ${Engineer.getGitUser()} </li>
                </ul>
            </div>
        </div> `
    };    

    const createIntern = Intern => {
    return `
    <div class="col-md-4">
        <div class="card" style="width: 18rem;">
            <div class="card-header" class="manager" style="background:#5F9EA0; color:blanched almond;">
                ${Intern.getName()} <br>
                    Intern
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" class="id">ID: ${Intern.getId()}</li>
                    <li class="list-group-item" class="email"> email: ${Intern.getEmail()}</li>                    
                    <li class="list-group-item" class="internSchool">school: ${Intern.getInternSchool()} </li>
                </ul>
            </div>
        </div> `    
    };

    const htmlArray = [];

    htmlArray.push(Team.filter(employee => employee.getRole()=== 'Manager').map(manager => createManager(manager)));
    htmlArray.push(Team.filter(employee => employee.getRole()=== 'Engineer').map(engineer => createEngineer(engineer)));
    htmlArray.push(Team.filter(employee => employee.getRole()=== 'Intern').map(intern => createIntern(intern)));

    return htmlArray.join('');
}

 
    module.exports = teamPlan => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
            <title>My Team Page</title>
        </head>
        <body>
            <div id="myTeam"
                style="background:#6495ED; color:blanchedalmond; text-align: left;padding: 15px;">
                <h3 class="header">My Team</h3>
            </div>
            <div class="container" style="margin-top: 50px;">
                <div class="row">
                ${generateTeam(teamPlan)}
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
            crossorigin="anonymous"></script>
    </body>
    </html>  `
    }

