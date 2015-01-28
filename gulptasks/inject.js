'use strict';

var gulp    = require('gulp'),
    ginject = require('gulp-inject');

gulp.task('inject', ['jade-build', 'vendor-scripts', 'scripts'], function () {
  var sources = gulp.src(['dist/js/vendor.min.js', 'dist/js/main.min.js']);

  return gulp.src('dist/index.html')
    .pipe(ginject(sources, {
      ignorePath: 'dist',
      addRootSlash: false
    }))
    .pipe(gulp.dest('dist'));
});
