const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const fs = require('fs');
const Intern = require('./lib/intern');
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
        }   theTeam.push(employee);
        if (addNewEmployee) {
            return team();
        } else {
            console.log(theTeam);
        }
    })
};


            
// Function to initialize app
const init = () => {
    managerQuestions()
};

// Function call to initialize app
init();
