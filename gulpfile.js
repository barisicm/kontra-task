var gulp = require('gulp');
// Define sass compiler
var sass = require('gulp-dart-sass');
// Define browser sync
var browserSync = require('browser-sync');
var reload = browserSync.reload;
// Define Css Minifyer
var cleanCSS = require('gulp-clean-css');
// Gulp rename plugin
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");


gulp.task('serve', function() {
    browserSync.init({
        open: false,
        server: {
            baseDir:'./'
        }
    });

    gulp.watch('*.html').on('change', reload);
    gulp.watch('./css/main.min.css').on('change', reload);
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});


gulp.task('sass', function() {
    return gulp.src('./SASS/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'));
});


gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

