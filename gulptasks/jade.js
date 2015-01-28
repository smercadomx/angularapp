'use strict';

var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('jade', function () {
  return gulp.src('app/**/*.jade')
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('app'));
});

gulp.task('jade-build', function () {
  return gulp.src('app/**/*.jade')
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('dist'));
});
