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
    function elementFromHTML(html) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content.firstElementChild;
    }
    
const newEmployee = ({Employee.name}, `
    <div class="col-4">
        <div class="card  mt-3" style="width: 18rem;">
            <div class="card-header bg-info">
                <h1 id='role' class="display-4">Featured</h1>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li id='item-1' class="list-group-item">An item</li>
                    <li id='item-2' class="list-group-item">A second item</li>
                    <li id='item-3' class="list-group-item">A third item</li>
                    <li id='item-4' class="list-group-item">A fourth item</li>
                </ul>
            </div>
        </div>
    </div>`);
    
}

module.exports= Employee;
