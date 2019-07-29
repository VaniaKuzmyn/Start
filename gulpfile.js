const gulp = require('gulp');
//const sass = require('gulp-sass');
const less = require('gulp-less');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
//const sassGlob = require('gulp-sass-glob');
//const concat = require('gulp-concat');
//const sourcemaps = require('gulp-sourcemaps');

//sass.compiler = require('node-sass');

function styles() {
    //return gulp.src('./src/sass/main.sass')
    return gulp.src('./src/less/main.less')
        .pipe(less().on('error',console.log.bind(console)))
        //.pipe(sassGlob())
        //.pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer(
            '>0.1%'
        ) ]))
        .pipe(gulp.dest('./build/css'))
        .pipe(cleanCss({
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
        
        //.pipe(concat('main.js'))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/js'))
        .pipe(babel({
            presets: ['env']
            }))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(rename({
            suffix: ".min",
            }))
        .pipe(gulp.dest('./build/js'))
    
        .pipe(browserSync.stream());
}


function watch() {
    browserSync.init({
        server: "./"
    });
    //gulp.watch("./src/sass/*.sass").on('change', function(){
    gulp.watch("./src/less/*.less").on('change', function(){
        styles();
        browserSync.reload();
    });
    gulp.watch("./src/js/*.js", animation);
    gulp.watch("./index.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('animation', animation);

gulp.task('watch', watch);
