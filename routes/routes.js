var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/play', function (req, res, next) {
  res.render('game.ejs', { title: 'Express' });
});

router.get('/', function (req, res, next) {
    res.render('splash.ejs');
})

module.exports = router;
