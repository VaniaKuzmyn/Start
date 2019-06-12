const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
//const cleanCss = require('gulp-clean-css');
//const uglify = require('gulp-uglify');
//const babel = require('gulp-babel');
//const concat = require('gulp-concat');
//const sourcemaps = require('gulp-sourcemaps');

function styles() {
    return gulp.src('./src/sass/main.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: false
        }))
        /*.pipe(cleanCss({
            level: 2
        }))*/
    .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}
/*
const jsFiles = [
    './src/js/main.js',
    './src/js/form.js',
]
*/
function animation() {
    return gulp.src('./src/js/*.js')
        //.pipe(sourcemaps.init())
        /*.pipe(uglify({
            toplevel: true
        }))*/
        /*.pipe(babel({
        presets: ['env']
        }))*/
        //.pipe(concat('main.js'))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./src/sass/*.sass", styles);
    gulp.watch("./src/js/main.js", animation);
    gulp.watch("./index.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('animation', animation);

gulp.task('watch', watch);
