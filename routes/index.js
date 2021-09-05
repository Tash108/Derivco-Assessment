var express = require('express');
var router = express.Router();
var matchCalculator = require('../public/javascripts/matchcalculator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tennis ' });
});


router.post('/', function(req, res, next) {
  console.log(req.body);
  var player1 = req.body.player1;
  var player2 = req.body.player2;
  var matchScore = matchCalculator.calculatePlayerMatch(player1+'matches'+player2);
  res.render('index', { title: 'Tennis', player1: player1, player2: player2, matchScore: matchScore });
});

module.exports = router;
