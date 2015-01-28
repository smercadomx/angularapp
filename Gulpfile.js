'use strict';

var gulp = require('gulp');

/* Import all tasks from directory */
require('fs').readdirSync('./gulptasks').forEach(function(file) {
  if(/.js$/.test(file)) {
    require('./gulptasks/' + file);
  }
});

gulp.task('build', ['jshint', 'install', 'vendor-scripts', 'scripts', 'stylus']);

gulp.task('serve', ['jade', 'watch', 'webserver']);
