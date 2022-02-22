const API_KEY = "VhC7bUjM26p0qCWiOzZximVpkWs";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data.expiry);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {
    
    let header = document.getElementById("resultsModalTitle");
    let result = document.getElementById("results-content");

    header.append("API Key Status");
    result.append("Your key is valid until \n", data);

    resultsModal.show();
}