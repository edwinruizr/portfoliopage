
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader("Cache-Control","max-age=604800");
  res.render('motorcycle', { title: 'Motorcycle Mechanics' });
});

module.exports = router;
