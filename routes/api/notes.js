const router = require('express').Router();
const db = require('../../db/db.json');

// GET route for retrieving all notes
router.get('/', (req, res) => {
  console.log('\n**** Route hit for notes API ****\n', req.route);
  res.status(200).json(db);
})

// POST route for new note
// to-be-added

module.exports = router;