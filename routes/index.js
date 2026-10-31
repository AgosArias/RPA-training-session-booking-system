var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RPA Training Session Booking System' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About RPA Training' });
});

router.get('/help', function(req, res, next) {
    res.render('help', { title: 'Help' });
});


module.exports = router;
