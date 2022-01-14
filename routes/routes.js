var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/play', function(req, res, next) {
  res.render('game.ejs', { title: 'Express' });
});

module.exports = router;
