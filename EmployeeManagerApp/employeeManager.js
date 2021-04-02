const mysql = require('mysql');
const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");

const path = require("path");

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
//  port: 3308,

  // Your username
  user: 'root',

  // Your password
  password: 'root',
  database: 'employee_db',
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {  
  inquirer
    .prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all Employees',
        'View all Employees by Department',
        'View all Employees by Manager',
        'Add Employee',
        'Delete Employee',
        'Update Employee Role',
        'Update Employee Manager',
        'exit',
  ],
})    
.then((answer) => {
          switch (answer.action) {
            case 'View all Employees':
            readEmployees();    
            break;

            case 'View all Employees by Department':
            departmentSearch();
            break;
            
            case 'View all Employees by Manager':
            rangeSearch();
            break;
    
            case 'Add Employee':
            addEmployee();
              break;
    
            case 'Delete Employee':
            deleteEmployee();
            break;
    
            case 'Update Employee Role':
            updateRole();
            break;

            case 'Update Employee Manager':
            updateManager();
            break;
              
            // case 'exit':
            //   connection.end();
            //   break;
          }
          });
        }; 

          const readEmployees = () => {
          connection.query('SELECT * FROM employee_db.employees', (err, res) => {
          if (err) throw err;      

          //console.log('Selecting all employees...\n');
          console.log(res);
         // console.log(`Employee: ${employee_db.employees.id} || Role: ${employee_db.employees.role_id}`)
          connection.end();
            });
          };
      
          const addEmployee();
    
        
          

          
          //break;
            // default:
            //   console.log(`Invalid action: ${answer.action}`);
            //   break;
        //   });
        // };
  
  
 
