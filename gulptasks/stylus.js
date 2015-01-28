'use strict';

var gulp   = require('gulp'),
    stylus = require('gulp-stylus');

gulp.task('stylus', function () {
  gulp.src('app/styles/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('stylus-watch', function () {
  gulp.src('app/styles/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('app/css'));
});
