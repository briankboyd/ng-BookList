var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var traceur = require('gulp-traceur');
var jshint = require('gulp-jshint');
var jshint_stylish = require('jshint-stylish');
var wrap = require('gulp-wrap');
var browsersync = require('browser-sync');
var less = require('gulp-less');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');

gulp.task('browser-sync', function() {
	browsersync({
		proxy: 'localhostd',
		port: 3000
	});
});


gulp.task('browsersync-reload', function () {
    browsersync.reload();
});

gulp.task('js', function () {
  gulp.src(['src/public/**/app.module.js', 'src/public/**/*.module.js', 'src/public/**/*.js'])
	.pipe(jshint())
    .pipe(jshint.reporter(jshint_stylish))  	
    .pipe(sourcemaps.init())    
    .pipe(traceur())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())    
    .pipe(sourcemaps.write())
    .pipe(wrap('(function(){\n"use strict";\n<%= contents %>\n})();'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/public/js'))    
});

gulp.task('less', function () {
        gulp.src(['src/public/**/*.less'])
        .pipe(less())
        .pipe(minifycss())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./dist/public/css'));
});

gulp.task('watch', ['js', 'less'], function () {
  gulp.watch('src/public/**/*.js', ['js']);
  gulp.watch('src/public/**/*.less', ['less']);
});