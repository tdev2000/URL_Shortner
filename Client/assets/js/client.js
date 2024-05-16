document.getElementById('urlForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const originalUrl = document.getElementById('originalUrl').value;
    try {
        const response = await fetch('/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ originalUrl })
        });
        const data = await response.json();
        document.getElementById('shortUrl').innerHTML = `<a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
    } catch (error) {
        console.error(error);
    }
});