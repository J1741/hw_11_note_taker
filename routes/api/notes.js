const router = require('express').Router();
const fs = require('fs');
const db = require('../../db/db.json');
const { v4 : uuidv4 } = require('uuid');

const generateUuid = () => uuidv4();

// GET route for retrieving all notes
router.get('/', (req, res) => {
  console.log('\n**** GET route hit for notes API ****\n', req.route);
  res.status(200).json(db);

  // console.log("db is:\n", db);
  // res.status(200).send('Successfully hit GET route for /api/notes');
})

// POST route for new note
router.post('/', (req, res) => {
  console.log('\n**** POST route hit for notes API ****\n', req.route);

  // destructure request body
  const { title, text } = req.body

  // check that title and text provided
  if(title && text) {
    // create new Note from destructured request body
    const newNote = {
      title,
      text,
      id: generateUuid() 
    }
    console.log("** newNote is: **\n", newNote);
  // handle case where note title and/or text not provided
  } else {
    res.status(400).send('Request body missing title and/or text');
  }

  // console.log("** note title is: **\n", title);
  // console.log("** note text is: **\n", text);

  // let newNote = req.body;
  // newNote.id = generateUuid();

  // await fs.readFile('../../db/db.json', (error, data) => error ? console.error(error) : console.log(data));
  // noteList.push(newNote);

  // await fs.writeFile('../../db/db.json', JSON.stringify(noteList), (error) => error ? console.error(error) : console.log('Success!'));

  res.send('Sucessfully hit POST route for /api/notes!');

})

module.exports = router;