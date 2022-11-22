const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    printInfo() {
        console.log(this.name, this.id, this.email, this.github)
    }
}

module.exports = Engineer;