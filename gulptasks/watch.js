'use strict';

var gulp  = require('gulp');

gulp.task('watch', function () {
  gulp.watch('app/styles/**/*.styl', ['stylus-watch']);
  gulp.watch('app/scripts/**/*.js', ['jshint']);
});
