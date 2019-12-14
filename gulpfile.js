var gulp = require('gulp');
// Define browser sync
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir:'./dist'
        }
    });

    gulp.watch('*.html').on('change', reload);
    gulp.watch('css/*.css').on('change', reload);
});

// Gulp task for bundling JavaScript files
gulp.task('pack-js', function() {
    return gulp.src(['js/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('dist'));
});

//Gulp task for bundling CSS files
gulp.task('pack-css', function () {    
    return gulp.src('css/*.css')
        .pipe(concat('styles.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series('pack-css', 'pack-js'));