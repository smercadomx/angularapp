'use strict';

var gulp = require('gulp');

/* Import all tasks from directory */
require('fs').readdirSync('./gulptasks').forEach(function(file) {
  if(/.js$/.test(file)) {
    require('./gulptasks/' + file);
  }
});

gulp.task('build', ['vendor-scripts', 'scripts', 'stylus', 'jade-build', 'inject']);

gulp.task('serve', ['jade', 'install', 'vendor-scripts', 'stylus-watch', 'watch', 'webserver']);
