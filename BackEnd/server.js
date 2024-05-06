// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like your HTML, CSS, and JS)
app.use(express.static('public'));

// Example route for the order form
app.post('/order', (req, res) => {
  const { items } = req.body;
  const total = calculateTotal(items);
  res.send(`Order received. Total: $${total}`);
});

// Function to calculate total (adjust logic as needed)
function calculateTotal(items) {
  let total = 0;
  // Example: iterate over items and calculate total price
  for (let item of items) {
    // Example calculation based on your item data
    total += item.price * item.quantity;
  }
  return total.toFixed(2);
}

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

