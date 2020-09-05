var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'CodeForTeen Pets' });
});

router.get('/dogs', function(req, res, next) {
    res.render('dogs', { title: 'CodeForTeen Pets' });
});

router.get('/cats', function(req, res, next) {
    res.render('cats', { title: 'CodeForTeen Pets' });
});

router.get('/hamsters', function(req, res, next) {
    res.render('hamsters', { title: 'CodeForTeen Pets' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'CodeForTeen Pets' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'CodeForTeen Pets' });
});

module.exports = router;