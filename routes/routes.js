var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/play', function (req, res, next) {
  res.render('game.ejs', { title: 'Express' });
});

router.get('/', function (req, res, next) {
    res.render('splash.ejs');
});

router.post('/play', (req, res, next) => {
    let player = req.body.playerName.trim();
    if (player) {
        console.log(`Player ${player} trying to join the game`);
        res.redirect('/play');
    } else {
        res.redirect('/');
    }
});

module.exports = router;
