var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hidden', function(req, res, next) {
  	res.render('index', { title: 'RizzyBeats' });
});

router.get('/', function(req, res, next) {
	res.render('temp', { title: 'cnnr.io' });
})

module.exports = router;
