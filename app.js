const express = require("express");

const app = express();

// Serve static files (for CSS)
app.use('/', express.static(__dirname + '/styles'));

// Route to serve the main page
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>SMS API</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="container">
                <h2>SMS API</h2>
                <form id="myForm">
                    <div>
                    API Key:
                    <input type="text" id="key" name="key" placeholder="API Key" required>
                    </div>
                    <div>
                    API Secret:
                    <input type="text" id="secret" name="secret" placeholder="API Secret" required>
                    </div>
                    <div>
                    URI:
                    <input type="text" id="uri" name="uri" placeholder="URI" required>
                    </div>
                </form>
            </div>
        </body>
        </html>
    `);
});

// Listen on port 5000
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
