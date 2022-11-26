
const renderCards = function () {
    return `
        <div class="col-4">
            <div class="card  mt-3" style="width: 18rem;">
                <div class="card-header bg-info">
                    <h1 id='role' class="display-4">{test.name}</h1>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li id='item-1' class="list-group-item">{test.id}</li>
                        <li id='item-2' class="list-group-item">{test.email}</li>
                        <li id='item-3' class="list-group-item">{test.office}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
};
const renderPage = generateHTML(renderCards);

function generateHTML() {
    return `
        <!doctype html>
        <html lang="en">    
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <!-- <link rel="stylesheet" href="src/stylesheet.css"> -->
            <title>InfiniTeam</title>
        </head>  
        <body>
            <header class="row bg-info justify-content-center align-items-center w-auto" style="height: 250px">
                <div class="col-auto">
                    <h1>Welcome to InfiniTeam</h1> 
                </div>       
            </header>    
            <div class="container">
                <main id='cardDeck' class="row justify-content-center">   
                    ${renderCards()}
                </main>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </body>
        </html>
    `;
};

module.exports = renderPage;