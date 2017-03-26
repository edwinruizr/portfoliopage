
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.docs);
  res.render('drawings', { title: 'Drawings', docs: req.docs });
});

module.exports = router;
