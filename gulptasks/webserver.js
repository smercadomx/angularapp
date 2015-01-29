'use strict';

var gulp       = require('gulp'),
    gwebserver = require('gulp-webserver');

gulp.task('webserver', ['jade', 'bower', 'vendor-scripts', 'stylus-watch'], function() {
  gulp.src('app')
    .pipe(gwebserver({
      port: 8080,
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('build-webserver', function() {
  gulp.src('dist')
    .pipe(gwebserver({
      port: 8080,
      directoryListing: false,
      open: true
    }));
});
