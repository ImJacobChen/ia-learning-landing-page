var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var assetsSrc = './src/assets';

gulp.task('default', ['serve']);

gulp.task('build', ['html', 'sass', 'images', 'scripts', 'fonts']);

gulp.task('serve', ['html', 'sass', 'images', 'scripts', 'fonts'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch('./src/index.html', ['html']).on('change', browserSync.reload);
    gulp.watch(assetsSrc + '/sass/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch(assetsSrc + '/images/**/*.*', ['images']).on('change', browserSync.reload);
    gulp.watch(assetsSrc + '/scripts/*.js', ['scripts']).on('change', browserSync.reload);
});

gulp.task('html', function() {
    gulp.src([
        './src/index.html',
        './src/favicon.ico',
        './src/humans.txt',
        './src/robots.txt',
        './src/manifest.json',
        './src/manifest.webapp',
    ])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function() {
    return gulp.src(assetsSrc + '/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: [
                "Android 2.3",
                "Android >= 4",
                "Chrome >= 20",
                "Firefox >= 24",
                "Explorer >= 8",
                "iOS >= 6",
                "Opera >= 12",
                "Safari >= 6"
            ],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('images', function() {
    return gulp.src(assetsSrc + '/images/**/*.*')
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('scripts', function() {

    /* Ordered so dependent files come later. */
    return gulp.src([
        assetsSrc + '/scripts/jquery-3.3.1.min.js',
        assetsSrc + '/scripts/slick.min.js',
        assetsSrc + '/scripts/headroom.js',
        assetsSrc + '/scripts/jquery.headroom.js',
        assetsSrc + '/scripts/jquery.waypoints.min.js',
        assetsSrc + '/scripts/dropdown.js',
        assetsSrc + '/scripts/app.js'
    ])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('fonts', function() {
    return gulp.src(assetsSrc + '/fonts/**.*')
        .pipe(gulp.dest('./dist/fonts'))
}) 