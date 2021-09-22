const router = require('express').Router();
const path = require('path');

// GET route for notes page
router.get('/notes', (req, res) => {
  console.log('\n**** Route hit for notes page ****\n', req.route);
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET route for homepage and non-existent routes 
router.get('/', (req, res) => {
  console.log('\n**** Generic route hit ****\n', req.route);
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;