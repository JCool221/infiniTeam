const Employee = require('./employee.js');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    otherInfo() {
        console.log(this.school);
    }
}

const fred = new Intern('fred', 456, 'fred@yo.com', 'superFred');
fred.logInfo();