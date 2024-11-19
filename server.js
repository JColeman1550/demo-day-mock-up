////////////////////////////

// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const port = 1080;

// Initialize app and middleware
const app = express();
app.set('view engine', 'ejs'); // Set EJS as the template engine
app.use(express.static('public')); // Serve static files
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data

// In-memory data store for pitches
let pitchData = {
  count: 0,
  locations: [],
};

// Route Handlers

// Render Home Page
app.get('/', (req, res) => {
  res.render('index', { pitchCount: pitchData.count, pitchLocations: pitchData.locations });
});

// Add New Pitch
app.post('/pitch', (req, res) => {
  const { x, y } = req.body;
  if (x && y) {
    pitchData.locations.push({ x: Number(x), y: Number(y) });
    pitchData.count++;
  }
  res.redirect('/');
});

// Reset All Data
app.post('/reset', (req, res) => {
  pitchData = {
    count: 0,
    locations: [],
  };
  res.redirect('/');
});

// Update Pitch Count
app.post('/update-count', (req, res) => {
  const { count } = req.body;
  if (!isNaN(count)) {
    pitchData.count = Number(count);
  }
  res.redirect('/');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
