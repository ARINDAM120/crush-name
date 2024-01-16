const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route handler for POST requests to "/submit-name"
app.post('/api/submit-name', (req, res) => {
  const enteredName = req.body.name.toLowerCase();
  console.log(`Received name: ${enteredName}`);

  // Check if the entered name is "arya"
  const isCorrect = enteredName === "arya";

  res.json({ correct: isCorrect, message: isCorrect ? "Ya, you got it!" : "Try again!" });
});

module.exports = app;
