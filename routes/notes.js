const notes = require('express').Router();
const db = require('../db/db.json');

// GET route for retrieving all notes
notes.get('/', (req, res) => {
  console.log('\n**** Route hit ****\n', req.route);
  res.status(200).json(db);
})

// POST route for new note

module.exports = notes;