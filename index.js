// index.js

const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON requests
app.use(express.json());

// GET request for the homepage
app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

// POST request to handle incoming data
app.post('/api/data', (req, res) => {
  const data = req.body;
  // Process the data as needed
  res.json({ message: 'Data received successfully', data });
});

// PUT request to update data
app.put('/api/data/:id', (req, res) => {
  const id = req.params.id;
  // Update data with the specified ID
  // Example: Update data in the database
  res.json({ message: `Data with ID ${id} updated successfully` });
});

// DELETE request to delete data
app.delete('/api/data/:id', (req, res) => {
  const id = req.params.id;
  // Delete data with the specified ID
  // Example: Delete data from the database
  res.json({ message: `Data with ID ${id} deleted successfully` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
