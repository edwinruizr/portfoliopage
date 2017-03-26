var express = require('express');
var drawings = require('./routes/drawings');
var motorcycle = require('./routes/motorcycle');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var mongojs = require("mongojs");
var db = mongojs(MONGODB_URI);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

var exposeDb = function(req, resp, next){
    db.drawings.find({} ,function(err, docs){
      resp.locals.docs = docs;
      req.docs = docs;
      next();
  		});

  };

app.use('/',express.static(__dirname + '/public'));
app.use('/drawings', exposeDb ,drawings);
app.use('/motorcycle', motorcycle);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.status = err.status;
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(process.env.PORT || 3000, process.env.IP,function () {
  console.log('Process running');
});
