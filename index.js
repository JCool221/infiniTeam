const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const {writeFile} = require('fs').promises;
const Manager = require('./lib/manager');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message:"What kind of employee would you like to add?",
            choices: ['Manager', 'Engineer', 'Intern'] ,
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the Employee's ID number",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email address",
        },
        {
            type: 'input',
            name: 'office',
            message: "enter the empoyee's office number",
            when: (answers) => answers.type == 'Manager',
        },
        {
            type: 'input',
            name: 'github',
            message: "enter the empoyee's Github",
            when: (answers) => answers.type == 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: "enter the empoyee's school",
            when: (answers) => answers.type == 'Intern',
         },
    ])
};


function typeSelect({type}){

    switch(type) {
        case 'Manager':
            new Manager({name, id, email, office});
        break;
        case 'Engineer':
            engineerQuestion();
        break;
        case 'Intern':
            internQuestion();
        break;
    }
};
    // Function to initialize app
const init = () => {
    questions()
    // .then((answers) => typeSelect(answers))
    .then(() => test())
    .catch((err) => console.error(err));
};

function test() {
    console.log('test');
}
// Function call to initialize app
init();
