const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

router.use('/api', apiRoutes);

// GET route for homepage 
router.get('/', (req, res) => {
  console.log('\n**** Route hit for homepage ****\n', req.route);
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET route for notes page
router.get('/notes', (req, res) => {
  console.log('\n**** Route hit for notes page ****\n', req.route);
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// handle non-existent routes 
// router.get('*', (req, res) => {
//   console.log('\n**** Generic route hit ****\n', req.route);
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

module.exports = router;