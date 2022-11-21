class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email =email;
    }
    printInfo() {
        console.log(this.name, this.id, this.email);
    }
}

Employee.prototype.logInfo = function() {
    console.log(this.printInfo(), this.otherInfo());
}

module.exports= Employee;
