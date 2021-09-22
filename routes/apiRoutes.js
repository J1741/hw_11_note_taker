const router = require('express').Router();
const fs = require('fs');
const { v4 : uuidv4 } = require('uuid');

const generateUuid = () => uuidv4();

// GET route for retrieving all notes
router.get('/notes', (req, res) => {
  console.log('\n**** GET route hit for notes API ****\n', req.route);
  let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
  res.status(200).json(data);
})

// POST route for writing new note
router.post('/notes', (req, res) => {
  console.log('\n**** POST route hit for notes API ****\n', req.route);

  const myNote = req.body;
  myNote.id = generateUuid();

  let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

  data.push(myNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(data));
  res.json(data);
})

module.exports = router;