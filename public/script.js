document.getElementById('scrape-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = document.getElementById('url').value;

    try {
        const response = await fetch('/scrape', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url }),
        });

        if (!response.ok) {
            throw new Error('Failed to scrape the site');
        }

        const data = await response.json();
        displayResults(data);

        // Example of triggering interaction (this should be dynamically created based on user input)
        simulateInteraction(data._id, [
            { type: 'click', selector: '#someButton' },
            { type: 'type', selector: '#someInput', value: 'Hello World' },
        ]);
    } catch (error) {
        displayError(error.message);
    }
});

async function simulateInteraction(id, actions) {
    try {
        const response = await fetch('/interact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, actions }),
        });

        const data = await response.json();
        if (response.ok) {
            displayResults(data);
        } else {
            displayError(data.error);
        }
    } catch (error) {
        displayError('Error simulating interactions');
    }
}

function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `
        <h2>Scraped Data</h2>
        <pre>${JSON.stringify(data.data, null, 2)}</pre>
        <h2>Interaction History</h2>
        <pre>${JSON.stringify(data.interactionHistory, null, 2)}</pre>
    `;
}

function displayError(message) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<p class="error">${message}</p>`;
}
