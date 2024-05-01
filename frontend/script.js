function runQuery() {
    // Implement loading logic "On process..."
    let button = document.querySelector('.editor button');
    // close error if there is an error
    closeError()
    button.textContent = 'On process...';
    let query = document.getElementById('queryInput').value;
    const url = `http://localhost:3200/api/v1/execute`

    fetch(url,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({sql_query: query})
    })
    .then(async (response) => {
        const data = await response.json();
        if(response.ok){
            if (data.message) {
                displayMessage(data.message);
            } else {
                displayResults(data.results);
            }
        } else {
            displayError(data.error);
        }
        button.textContent = 'Run Query';
    })
    .catch((error) => {
        console.log(error);
        button.textContent = 'Run Query';
    });

}


function displayResults(results) {
    // Display the results in the results table
    let table = document.getElementById('queryResults');
    let tbody = table.querySelector('tbody');
    if (!tbody) {
        tbody = document.createElement('tbody');
        table.appendChild(tbody);
    } else {
        tbody.innerHTML = '';
    }

    // Create column headers
    let headerRow = document.createElement('tr');
    for (let column in results[0]) {
        let headerCell = document.createElement('th');
        headerCell.textContent = column;
        headerRow.appendChild(headerCell);
    }
    tbody.appendChild(headerRow);

    // Fill in the results data
    results.forEach(function (rowData) {
        let row = document.createElement('tr');
        for (let column in rowData) {
            let cell = document.createElement('td');
            cell.textContent = rowData[column];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    });

    // Display the results section
    document.querySelector('.results').style.display = 'block';
}

function displayMessage(message) {
    let messageElement = document.getElementById('message');
    let errorElement = document.getElementById('error');
    let messageContent = document.getElementById('messageContent');

    messageContent.textContent = message;
    messageElement.style.display = 'block';

    // Hide error message if displayed
    errorElement.style.display = 'none';
}

function displayError(error) {
    let errorElement = document.getElementById('error');
    let messageElement = document.getElementById('message');
    let errorContent = document.getElementById('errorContent');

    errorContent.textContent = error;
    errorElement.style.display = 'block';

    // Hide message if displayed
    messageElement.style.display = 'none';
}

function closeMessage() {
    let messageElement = document.getElementById('message');
    messageElement.style.display = 'none';
}

function closeError() {
    let errorElement = document.getElementById('error');
    errorElement.style.display = 'none';
}

function closeResults() {
    document.querySelector('.results').style.display = 'none';
}

