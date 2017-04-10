/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var minifyejs = require('gulp-minify-ejs');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('minify', function() {
  return gulp.src('src/html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public'));
});

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

gulp.task('watch',function(){
  gulp.watch('src/scripts/*.js',['scripts']);
});
