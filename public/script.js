document.getElementById('scrape-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = document.getElementById('url').value;

    const response = await fetch('/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
    });

    const data = await response.json();
    document.getElementById('results').innerText = JSON.stringify(data, null, 2);

    // Example of triggering interaction (this would be dynamically created based on user input)
    simulateInteraction(data._id, [
        { type: 'click', selector: '#someButton' },
        { type: 'type', selector: '#someInput', value: 'Hello World' },
    ]);
});

async function simulateInteraction(id, actions) {
    const response = await fetch('/interact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, actions }),
    });

    const data = await response.json();
    document.getElementById('results').innerText = JSON.stringify(data, null, 2);
}
