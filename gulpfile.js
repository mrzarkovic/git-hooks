const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const count = require('gulp-count');
const errorHandler = require('gulp-error-handle');

function logError (err) {
  console.error(err);
  this.emit('end');
}

gulp.task('build-js', function() {
    return gulp.src('./js/main.js')
      .pipe(errorHandler(logError))
      .pipe(count('## js-files selected'))
      .pipe(concat('bundle.js'))
      .pipe(uglify({ mangle: false }))
      .pipe(gulp.dest('./dist/'));
  });
