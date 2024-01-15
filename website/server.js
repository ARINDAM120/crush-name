const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route handler for GET requests to the root path
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

// Updated Route handler for POST requests to "/submit-name"
app.post('/submit-name', (req, res) => {
  const enteredName = req.body.name.toLowerCase();
  console.log(`Received name: ${enteredName}`);

  // Check if the entered name is "arya"
  const isCorrect = enteredName === "arya";

  res.send({ correct: isCorrect, message: isCorrect ? "Ya, you got it!" : "Try again!" });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
