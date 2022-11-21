const Employee = require('./employee.js');

class Manager extends Employee {
    constructor (name, id, email, Office) {
        super(name, id, email);
        this.Office = Office;
    }
    printInfo() {
        console.log(this.name, this.id, this.email, this.Office)
    }
}

const fred = new Manager('fred', 456, 'fred@yo.com', 'superFred');

fred.printInfo();
fred.logInfo();