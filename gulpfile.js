'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('build', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('start', function () {
    gulp.watch('./src/scss/**/*.scss', gulp.series('build'));
});
