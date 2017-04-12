
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.docs);
  res.setHeader("Cache-Control","max-age=604800");
  res.render('drawings', { title: 'Drawings', docs: req.docs });
});

module.exports = router;
