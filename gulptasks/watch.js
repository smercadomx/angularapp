'use strict';

var gulp       = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function () {
  livereload.listen();

  gulp.watch('app/styles/**/*.styl', ['stylus-watch']).on('change', livereload.changed);
  gulp.watch('app/scripts/**/*.js', ['jshint']).on('change', livereload.changed);
  gulp.watch('app/**/*.jade', ['jade']).on('change', livereload.changed);
});
