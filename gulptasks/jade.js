'use strict';

var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('jade', function () {
  gulp.src('app/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('app'));
});
