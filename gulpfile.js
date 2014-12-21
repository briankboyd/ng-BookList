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
var webserver = require('gulp-webserver');

var srcPaths = {
    js: ['src/public/**/app.module.js', 'src/public/**/*.module.js', 'src/public/**/*.js'],
    css: ['src/public/**/*.less']
};

var distPaths = {
  js: './dist/public/js',
  css: './dist/public/css'
};

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({      
      host: 'localhost',
      port: 6969,
      fallback: 'index.html',
      open: true
    }));
});

gulp.task('browser-sync', function() {
	browsersync({
		proxy: 'localhost:6969',
	});
});


gulp.task('js', function () {
  gulp.src(srcPaths.js)
	.pipe(jshint())
    .pipe(jshint.reporter(jshint_stylish))  	
    .pipe(sourcemaps.init())    
    .pipe(traceur())
    .pipe(concat('app.min.js'))
    .pipe(ngAnnotate())    
    .pipe(sourcemaps.write())
    .pipe(wrap('(function(){\n"use strict";\n<%= contents %>\n})();'))
    .pipe(uglify())
    .pipe(gulp.dest(distPaths.js))
});

gulp.task('less', function () {
        gulp.src(srcPaths.css)
        .pipe(less())
        .pipe(minifycss())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(distPaths.css))
        .pipe(browsersync.reload({stream:true}));
});

gulp.task('watch', ['js', 'less'], function () {
  gulp.watch(srcPaths.js, ['js', browsersync.reload]);
  gulp.watch(srcPaths.css, ['less']);
});

gulp.task('default', ['browser-sync','watch', 'webserver']);