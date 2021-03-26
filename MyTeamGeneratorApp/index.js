//packages needed

//const jest = require("jest");
const inquirer = require("inquirer");
const fs = require("fs");

const path = require("path");
const Employee = require("./lib-classes/employee.js");
const Manager = require("./lib-classes/manager");
const Engineer = require("./lib-classes/engineer");
const Intern = require("./lib-classes/intern");
const util = require('util');
const { finished } = require('stream');

const teamPlan = require("./generateteam")

const OUTPUT_DIR = path.resolve(__dirname, "dist-output"); // 
const outputPath = path.join(OUTPUT_DIR, "team.html") // to create team.html after prompts answered
const writeFileSync = util.promisify(fs.writeFile);

const team = []

//start app function
function init() {
    makeTeam()
}

function makeTeam() {
    inquirer.prompt([
        {    
        messsage:"Enter employee name:",
        type: 'input',
        name: 'name',
        validate: (value) => { if (value) {return true} else { return "please enter employee name"}},
        },
        {    
        message: "Enter employee ID:",
        type: 'input',
        name: 'id',
        validate: (value) => { if (value) {return true} else { return "please enter employee ID"}},
        },
        {
        message: "Enter employee email address:",
        type: 'input',
        name: 'email',
        validate: (value) => { if (value) {return true} else { return "please enter employee's email address"}},
        },
        {    
        message: "Choose an employee role",    
        type: 'list',
        choices: ['manager', 'engineer','intern', ],
        name: 'role'    
    },
])

    .then(function ({ name, id, email, role}) {
    switch (role) {
        case "engineer":
           inquirer.prompt ({
               type: "input",
               message: "What is your engineer's GitHub username?",
               name: "gitUser",
           }) 
            .then(function ({gitUser}) {
               const engineer = new Engineer(name, id, email, gitUser)
               team.push(engineer);
               finish();
             })
           break;
        case "manager":
            inquirer.prompt ({
                type: "input",
                message: "What is your manager's office number?",
                name: "managerOffice",
            })
                .then(function ({managerOffice}){
                const manager = new Manager(name, id, email, managerOffice)    
                team.push(manager);
                finish();
                })   
            break;
        case "intern":
            inquirer.prompt ({
                type: "input",
                message: "What school does your intern attend?",
                name: "internSchool",
            })
                .then(function ({internSchool}){
                const intern = new Intern(name, id, email, internSchool)
                    team.push(intern);
                finish();
                })  
                break;  
                }
    })    
    };    
//works to here
// //function to write html page
function writeToFile(){
    fs.writeFile(outputPath, teamPlan(team), (err) =>{
        if(err) {
            return console.log(err)
        } else {
            console.log("employee added");
        }
    })
}


// function to add or end adding employees
function finish() {

    inquirer.prompt({
        type: "confirm",
        message: "Do you want to add another employee?",
        name: "addEmployee",
    }).then(function(addEmployee) {
        console.log(addEmployee.addEmployee)
        if(addEmployee.addEmployee) {
            makeTeam();
        } else {
            writeToFile()
        }
    })
}

// //function call to initialize app
init();