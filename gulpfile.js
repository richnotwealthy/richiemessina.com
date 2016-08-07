const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const del = require('del');
const dust = require('gulp-dust');
const sass = require('gulp-sass');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const through = require('through2');
const sourcemaps = require('gulp-sourcemaps');
const globby = require('globby');
const useref = require('gulp-useref');

// glob, browserify, uglify
gulp.task('scripts', function (){
    var bundledStream = through();

    bundledStream
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./.tmp/scripts'));

    globby(['./www/scripts/**/*.js']).then(function(entries){
        //console.log(entries);
        var b = browserify({
            entries: entries,
            debug: true
        });

        b.bundle().pipe(bundledStream);
    }).catch(function(err) {
        bundledStream.emit('error', err);
    });

    return bundledStream;
});

// sass transpiler
gulp.task('styles', function(){
    return gulp.src('./www/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./.tmp/styles'));
});

// dust template builder
gulp.task('templgen', function(){
    return gulp.src('./www/templates/**/*.html')
    .pipe(dust({ config: { cjs:true, cache:false } }))
    .pipe(gulp.dest('www/views'));
});

// development mode
gulp.task('develop', ['scripts', 'styles'], function(){
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' }
    }).on('readable', function() {
        this.stdout.pipe(process.stdout);
        this.stderr.pipe(process.stderr);
    });

    gulp.watch('./www/templates/**/*.html', ['templgen', 'scripts']);
    gulp.watch('./www/scripts/**/*.js', ['scripts']);
    gulp.watch('./www/config/**/*.js', ['scripts']);
    gulp.watch('./www/styles/**/*.scss', ['styles']);
});

gulp.task('bld', ['scripts', 'styles'], function(){
    gulp.src('./www/fonts/**/*').pipe(gulp.dest('./dist/fonts'));
    gulp.src('./www/images/**/*').pipe(gulp.dest('./dist/images'));
    gulp.src('./statics/**/*').pipe(gulp.dest('./dist/statics'));

    gulp.src('www/index.html')
    .pipe(useref({
        searchPath: ['.','.tmp'],
        transformPath: function(filePath) {
            console.log(filePath);
            return filePath;
        }
    }))
    .pipe(gulp.dest('dist'));
});

// builds dist
gulp.task('prod', ['bld'], function(){
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'production' }
    }).on('readable', function() {
        this.stdout.pipe(process.stdout);
        this.stderr.pipe(process.stderr);
    });
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('default', ['develop']);