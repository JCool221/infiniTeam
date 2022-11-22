const Employee = require('./employee.js');

class Manager extends Employee {
    constructor (name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    otherInfo() {
        console.log(this.name, this.id, this.email, this.office)
    }
   
}

module.exports = Manager;