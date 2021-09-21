const express = require('express');
const path = require('path');
const fs = require('fs');
const apiRoutes = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// middleware for parsing JSON and urlencoded form data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

// middleware to access stylesheet and frontend javascript
app.use(express.static('public'));

// GET route for homepage 
app.get('/', (req, res) => {
  console.log('\n**** Route hit ****\n', req.route);
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// GET route for notes page
app.get('/notes', (req, res) => {
  console.log('\n**** Route hit ****\n', req.route);
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// GET route to handle non-existent routes 
app.get('*', (req, res) => {
  console.log('\n**** Route hit ****\n', req.route);
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, () =>
  console.log(`******** Now listening at http://localhost:${PORT} ☕️ ********`));