var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('js', function () {
  gulp.src(['src/public/**/app.module.js', 'src/public/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/public/js'))
});

gulp.task('watch', ['js'], function () {
  gulp.watch('src/public/**/*.js', ['js']);
});