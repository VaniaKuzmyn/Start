const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
var rename = require("gulp-rename");
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
//const concat = require('gulp-concat');
//const sourcemaps = require('gulp-sourcemaps');

function styles() {
    return gulp.src('./src/sass/main.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: false
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(cleanCSS({
        level: 2
        }))
        .pipe(rename({
        suffix: ".min",
        }))
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
        .pipe(babel({
        presets: ['env']
        }))
        //.pipe(concat('main.js'))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/js'))

        .pipe(uglify({
            toplevel: true
        }))
        .pipe(rename({
            suffix: ".min",
            }))
        .pipe(gulp.dest('./build/css'))
    
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
