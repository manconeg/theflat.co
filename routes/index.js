var express = require('express');
var router = express();

router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/menu', function(req, res, next) {
  res.render('menu');
});

module.exports = router;
