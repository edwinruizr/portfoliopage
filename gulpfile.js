/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
var uglify = require('gulp-uglify')

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('scripts',function(){
  gulp.src('src/scripts/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('public/scripts'));
});
