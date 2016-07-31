const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const del = require('del');
const dust = require('gulp-dust');
const sass = require('gulp-sass');
const browserify = require('browserify');
const uglify = require('uglify-js');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const through = require('through2');
const sourcemaps = require('gulp-sourcemaps');
const globby = require('globby');

// glob, browserify, uglify
gulp.task('scripts', function (){
    var bundledStream = through();

    bundledStream
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
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

    gulp.watch('./www/templates/**/*.html', ['templgen']);
    gulp.watch('./www/scripts/**/*.js', ['scripts']);
    gulp.watch('./www/styles/**/*.scss', ['styles']);
});

gulp.task('bld', function(){
    gulp.src('./www/fonts/**/*').pipe(gulp.dest('./dist/font'));
    gulp.src('./www/images/**/*').pipe(gulp.dest('./dist/img'));
    gulp.src('./.tmp/styles/**/*.css').pipe(gulp.dest('./dist/css'));
    gulp.src('./.tmp/scripts/**/*.js').pipe(gulp.dest('./dist/js'));
    return gulp.src('./www/*.html')
    .pipe(gulp.dest('./dist'));
});

// builds dist
gulp.task('prod', ['scripts', 'styles', 'bld'], function(){
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