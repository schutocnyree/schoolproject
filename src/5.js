const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Create a new route to handle HTTP GET requests for the "/" path
app.get('/', (req, res) => {
  // Return a JSON object with the message "Hello World!"
  res.json({ message: 'Hello World!' });
});

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
