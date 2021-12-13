const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// If we get here, it's the wrong route!
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;