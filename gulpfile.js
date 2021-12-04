const { src, dest, watch, parallel } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;

const css = () => {
    return src('scss/style.scss')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(dest('css'))
        .pipe(browserSync.stream())
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: '../',
        }
    });
}

const js = () => {
    return src('js/script.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(dest('js'))
        .pipe(browserSync.stream())
}

const watching = () => {
    watch(['scss/**/*.scss'], css);
    watch(['js/**/*.js', '!js/script.min.js'], js);
    watch(['*.html', 'news/*.html']).on('change', browserSync.reload)
}

exports.css = css;
exports.server = server;
exports.watching = watching;
exports.js = js;

exports.default = parallel(server, watching, js)