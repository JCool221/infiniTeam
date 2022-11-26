const renderPage = require('./assets/src/renderPage')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');
const fs = require('fs');
const inquirer = require('inquirer');
const theTeam = [];



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
        theTeam.push(manager);
        console.log(manager);
    })    
};    

const team = () => {
    console.log(`
    Add additional Employees
    ------------------------
    `)
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
        }   theTeam.push(employee);    
        if (addNewEmployee) {
            return team();
        } else {
            console.log('finished theTeam');
            return theTeam;
        }    
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("success! file created at ./dist/index.html");
        }
    })
};

// renderPage();
managerQuestions()
    .then(team)
    .then(theTeam => {
        return renderPage(theTeam);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });