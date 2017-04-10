/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var minifyejs = require('gulp-minify-ejs');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('scripts',function(){
  gulp.src('src/scripts/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('public/scripts'));
});

gulp.task('ejs', function(){
gulp.src('src/views/*.ejs')
  .pipe(minifyejs())
  .pipe(gulp.dest('views'));
});
