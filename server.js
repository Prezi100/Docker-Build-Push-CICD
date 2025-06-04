const express = require('express');
const app = express();
const PORT = 3000;

// Route for homepage
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to My Portfolio</h1>
    <p>This is the home page of my Node.js portfolio website.</p>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
