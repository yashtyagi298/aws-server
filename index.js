const express = require('express');
const app = express();
const PORT = 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello, welcome to the basic backend!');
});

// Another example route
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
