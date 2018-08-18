'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');


// Src Sass files for compile
const srcSassFiles = 'assets/sass';
const arrSrcSassFiles = [
    srcSassFiles + '/*.scss',
    srcSassFiles + '/components/*.scss',
    srcSassFiles + '/components/forms/*.scss'
];

// Src output for css files
const srcCssFiles = 'assets/css';

// Options for development
const sassDevOptions = {
    outputStyle: 'expanded'
};

// Options for production
const sassProdOptions = {
    outputStyle: 'compressed'
};

//COMPILE CSS
gulp.task('sassdev', function () {
    return gulp.src(arrSrcSassFiles)
        .pipe(sass(sassDevOptions).on('error', sass.logError))
        .pipe(gulp.dest(srcCssFiles));
});

gulp.task('sassprod', function () {
    return gulp.src(arrSrcSassFiles)
        .pipe(sass(sassProdOptions).on('error', sass.logError))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest(srcCssFiles));
});

gulp.task('watch', function () {
    gulp.watch(arrSrcSassFiles, ['sassdev']);
});

gulp.task('default', ['watch']);