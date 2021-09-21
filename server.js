const express = require('express');
const homeRoutes = require('./routes/index.js');
const apiRoutes = require('./routes/api/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// middleware for parsing JSON and urlencoded form data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to access stylesheet and frontend javascript
app.use(express.static('public'));

// middleware for routes
app.use('/', homeRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () =>
  console.log(`******** Now listening at http://localhost:${PORT} ☕️ ********`));