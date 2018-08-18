'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');

//COMPILE CSS
gulp.task('sass', function () {
    return gulp.src(['assets/sass/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('serve', ['sass'], function () {
    gulp.watch(['assets/sass/*.scss'], ['sass']);
});


gulp.task('default', ['serve']);