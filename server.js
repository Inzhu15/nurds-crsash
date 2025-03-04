const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

// Sample data to store models
let models = [];

// GET endpoint to retrieve models
app.get('/models', (req, res) => {
  res.json(models);
});

// POST endpoint to add a new model
app.post('/models', (req, res) => {
  const { name, username, year, img } = req.body;

  if (!name || !username || !year || !img) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create a new model object
  const newModel = {
    name,
    username,
    year,
    img
  };

  // Add the new model to the list
  models.push(newModel);

  res.status(201).json(newModel);  // Respond with the newly added model
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
