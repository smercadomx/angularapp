'use strict';

var gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'),
    bowerFiles = require('gulp-bower-files');

gulp.task('vendor-scripts', ['jshint'], function() {
  bowerFiles()
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts', ['jshint'], function() {
  gulp.src('app/scripts/**/*.js')
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest('dist/js'));
});
