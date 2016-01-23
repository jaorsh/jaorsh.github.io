var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  webpack = require('webpack-stream');
gulp.task('default', function() {
  return gulp.src('entry.js')
    .pipe(webpack())
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest('dist'));
});
