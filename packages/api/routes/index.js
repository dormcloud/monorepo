const router = require('express').Router();

router.get('/', (req, res) => {
  res.end("Hello world!");
});

module.exports = router;