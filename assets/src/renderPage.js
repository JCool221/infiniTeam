
const renderManager = function (manager) {
    return `
        <div class="col-4">
            <div class="card  mt-3" style="width: 18rem;">
                <div class="card-header bg-info">
                    <h1 id='role' class="display-4">${manager.name}</h1>
                    <h4><i class="fa-solid fa-mug-hot"></i> Manager</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li id='item-1' class="list-group-item">${manager.id}</li>
                        <li id='item-2' class="list-group-item"><a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li id='item-3' class="list-group-item">${manager.office}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
};


const renderEngineer = function (engineer) {
    return `
        <div class="col-4">
            <div class="card  mt-3" style="width: 18rem;">
                <div class="card-header bg-info">
                    <h1 id='role' class="display-4">${engineer.name}</h1>
                    <h4><i class="fa-solid fa-glasses"></i> Engineer</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li id='item-1' class="list-group-item">${engineer.id}</li>
                        <li id='item-2' class="list-group-item"><a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li id='item-3' class="list-group-item"><a href=github.com/${engineer.github}">${engineer.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
};


const renderIntern = function (intern) {
    return `
        <div class="col-4">
            <div class="card  mt-3" style="width: 18rem;">
                <div class="card-header bg-info">
                    <h1 id='role' class="display-4">${intern.name}</h1>
                    <h4><i class="fa-solid fa-book"></i> Intern</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li id='item-1' class="list-group-item">${intern.id}</li>
                        <li id='item-2' class="list-group-item"><a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li id='item-3' class="list-group-item">${intern.school}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
};


renderPage = (data) => {
    console.log('called renderpage');
    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        
        if (employee.role === 'Manager') {
            const managerCard = renderManager(employee);
            cardArray.push(managerCard);
            console.log('manager');
        }
        if (employee.role === 'Engineer') {
            const engineerCard = renderEngineer(employee);
            cardArray.push(engineerCard);
            console.log('engineer');
        }
        if (employee.role === 'Intern') {
            const internCard = renderIntern(employee);
            cardArray.push(internCard);
            console.log('intern');
        }
    }
    cardHTML = cardArray.join('');
    console.log('created cards');
    const generatedPage = generateHTML(cardHTML);
    console.log('generate page');
    return generatedPage;
}

const generateHTML = (cardHTML) => {
    console.log('called generateHTML');
    return `
        <!doctype html>
        <html lang="en">    
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />            <title>InfiniTeam</title>
        </head>  
        <body>
            <header class="row bg-info justify-content-center align-items-center w-auto" style="height: 250px">
                <div class="col-auto">
                    <h1>Welcome to InfiniTeam</h1> 
                </div>       
            </header>    
            <div class="container">
                <main id='cardDeck' class="row justify-content-center">   
                    ${cardHTML}
                </main>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </body>
        </html>
    `;
};

module.exports = renderPage;