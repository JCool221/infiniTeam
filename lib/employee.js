class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email =email;
    }
    printInfo() {
        const card =  `<div class="col-4">
        <div class="card  mt-3" style="width: 18rem;">
            <div class="card-header bg-info">
                <h1 id='role' class="display-4">Featured</h1>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li id='item-1' class="list-group-item">${this.name}</li>
                    <li id='item-2' class="list-group-item">${this.id}</li>
                    <li id='item-3' class="list-group-item">${this.email}</li>
                </ul>
            </div>
        </div>
    </div>`;
    console.log(card);
    }
}
  

module.exports= Employee;
