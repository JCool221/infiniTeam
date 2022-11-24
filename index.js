const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const fs = require('fs');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');
const theTeam = [];


const generateHTML = () =>
     `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="src/stylesheet.css"> -->
    <title>InfiniTeam</title>
  </head>
  <body>
    <header class="row bg-info justify-content-center align-items-center w-auto" style="height: 250px">
        <div class="col-auto">
            <h1>Welcome to InfiniTeam</h1> 
        </div>   
    </header>
    <div class="container">
        <main id='cardDeck' class="row justify-content-center">
        </main>
    </div>
        

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script>
    function elementFromHTML(html) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content.firstElementChild;
    }
    </script>
</body>
</html>`;


const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the manager's name",
        },    
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID number",
        },    
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email address",
        },       
        {
            type: 'input',
            name: 'office',
            message: "Enter the manager's office number",
        },    
    ])    
    .then(managerData => {
        const { name, id, email, office} = managerData;
        const manager = new Manager (name, id, email, office);
        theTeam.push(manager.printInfo());
        console.log(theTeam);
        team();
    })    
};    

const team = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message:"What kind of employee would you like to add?",
            choices: ['Engineer', 'Intern'] ,
        },    
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name",
        },    
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID number",
        },    
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email address",
        },    
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's Github",
            when: (data) => data.role == 'Engineer',
        },    
        {
            type: 'input',
            name: 'school',
            message: "Enter the employee's school",
            when: (data) => data.role == 'Intern',
         },   
         {
            type: 'confirm', 
            name: 'addNewEmployee',
            message: 'would you like to add another team member?',
            default: false,
         },   
    ])     
    .then(employeeData => {
        const { role, name, id, email, github, school, addNewEmployee } = employeeData;
        let employee;
        if (role==="Engineer") {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } else if (role==="Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }   theTeam.push(employee.printInfo());    
        if (addNewEmployee) {
            return team();
        } else {
            console.log(theTeam);
            //fs.writeFile(`main.html`, generateHTML(theTeam));
        }    
    })    
};    
// Function to initialize app
const init = () => {
    managerQuestions()
    // const bob = new Employee('bob', 32, 'bob@bob.com');
    // bob.printInfo();
};

// Function call to initialize app
init();
