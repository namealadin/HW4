var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('This page is added by me');
  res.render('mypage', { title: 'This my page' });
});

/* GET users listing. */
router.get('/help', function(req, res, next) {
  //res.send('This page is added by me');
  res.render('mypagehelp', { title: 'This my page' });
});

module.exports = router;
