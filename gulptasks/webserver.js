'use strict';

var gulp       = require('gulp'),
    gwebserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(gwebserver({
      port: 8080,
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
