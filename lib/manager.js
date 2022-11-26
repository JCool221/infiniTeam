const Employee = require('./employee.js');

class Manager extends Employee {
    constructor (name, id, email, office) {
        super(name, id, email);
        this.office = office;
        this.role = 'Manager';
    }
    // generateManager = function () {
    //     return `
    //         <div class="col-4">
    //             <div class="card  mt-3" style="width: 18rem;">
    //                 <div class="card-header bg-info">
    //                     <h1 id='role' class="display-4">${this.name}</h1>
    //                 </div>
    //                 <div class="card-body">
    //                     <ul class="list-group list-group-flush">
    //                         <li id='item-1' class="list-group-item">${this.id}</li>
    //                         <li id='item-2' class="list-group-item">${this.email}</li>
    //                         <li id='item-3' class="list-group-item">${this.office}</li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    // };
}
   
module.exports = Manager;