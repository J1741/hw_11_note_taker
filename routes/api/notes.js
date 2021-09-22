const router = require('express').Router();
const fs = require('fs');
// const db = require('../../db/db.json');
const { v4 : uuidv4 } = require('uuid');

const generateUuid = () => uuidv4();

// GET route for retrieving all notes
router.get('/', (req, res) => {
  console.log('\n**** GET route hit for notes API ****\n', req.route);
  // res.status(200).json(db);
})

// POST route for new note
router.post('/', async (req, res) => {
  console.log('\n**** POST route hit for notes API ****\n', req.route);

  let newNote = req.body;
  newNote.id = generateUuid();

  await fs.readFile('../../db/db.json', (error, data) => error ? console.error(error) : console.log(data));
  // noteList.push(newNote);

  // await fs.writeFile('../../db/db.json', JSON.stringify(noteList), (error) => error ? console.error(error) : console.log('Success!'));

  res.send('Sucessfully wrote file!');

})

module.exports = router;