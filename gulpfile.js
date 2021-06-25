const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass"); // минификация
const concat = require("gulp-concat"); // конкатенация + имя
const browserSync = require("browser-sync").create(); // live update 
const uglify = require("gulp-uglify-es").default; //
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin"); // отпимизация img
const del = require("del"); // удаление dist-папки
const ghpages = require('gh-pages'); // gh-pages for dist folder


ghpages.publish('dist', {
    repo: 'https://github.com/Fpsska/Bouncy-Landing.git',
    message: 'Auto-generated commit'
});

function cleanDist() {
    return del("dist");
}

function images() {
    return src("app/img/**/*")
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]
        ))
        .pipe(dest("dist/img"));
}

function scripts() {
    return src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/owl.carousel/dist/owl.carousel.js",
        "node_modules/lightbox2/dist/js/lightbox.js",
        "node_modules/easy-pie-chart/dist/easypiechart.js",
        "app/js/main.js"
    ])
        .pipe(concat("main.min.js")) // конкатенация + единое название 
        .pipe(uglify())   // минификация
        .pipe(dest("app/js"))  // конечный путь
        .pipe(browserSync.stream());
}

function styles() {       /*КОМПИЛЯЦИЯ scss -> style.min.css*/
    return src([
        "node_modules/owl.carousel/dist/assets/owl.carousel.css",
        "node_modules/owl.carousel/dist/assets/owl.theme.default.css",
        "node_modules/lightbox2/dist/css/lightbox.css",
        "app/scss/style.scss"
    ])
        .pipe(scss({ outputStyle: "compressed" })) // минификация
        .pipe(concat("style.min.css")) // конкатенация + единое название  
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 10 version"],
            grid: true
        }))
        .pipe(dest("app/css")) // выкидывает в app/css
        .pipe(browserSync.stream());
}

function browsersync() {  // live update 
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function watching() {
    watch(["app/scss/**/*.scss"], styles);
    watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
    watch(["app/*.html"]).on("change", browserSync.reload);
}

function build() {
    return src([
        "app/*.html",
        "app/css/style.min.css",
        "app/js/main.min.js"
    ], { base: "app" })
        .pipe(dest("dist"));
}


exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching);
