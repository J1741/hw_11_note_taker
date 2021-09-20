// setup
const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001

const app = express();

// middleware for parsing JSON and urlencoded form data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// html route for landing page
app.get('/', (req, res) => {
  console.log('\n**** Route hit ****\n', req.route);
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  console.log('\n**** Route hit ****\n', req.route);
  res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.listen(PORT, () =>
  console.log(`################ Now listening at http://localhost:${PORT} ################`)
);