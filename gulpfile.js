var gulp = require('gulp');
// Define browser sync
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function() {
    browserSync.init({
        open: false,
        server: {
            baseDir:'./'
        }
    });

    gulp.watch('*.html').on('change', reload);
    gulp.watch('css/*.css').on('change', reload);
});

