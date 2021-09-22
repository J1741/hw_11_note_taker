const express = require('express');
const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

// middleware for parsing JSON and urlencoded form data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to access stylesheet and frontend javascript
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

// middleware for routes
app.use('/', routes);

app.listen(PORT, () =>
  console.log(`******** Now listening at http://localhost:${PORT} ☕️ ********`));