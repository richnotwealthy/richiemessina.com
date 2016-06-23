const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
        port: 5555,
        debug: true
    });
});

gulp.task('default', ['webserver']);