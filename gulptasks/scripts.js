'use strict';

var gulp            = require('gulp'),
    uglify          = require('gulp-uglify'),
    concat          = require('gulp-concat'),
    bowerFiles      = require('main-bower-files'),
    angularFilesort = require('gulp-angular-filesort');

gulp.task('vendor-scripts', ['jshint', 'bower'], function() {
  return gulp.src(bowerFiles())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts', ['jshint'], function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(angularFilesort())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest('dist/js'));
});
