const gulp = require("gulp"),
sass = require("gulp-sass"),
browserSync = require("browser-sync").create();

// compile scss --> css
function style() {
    return gulp.src("./scss/**/*.scss") // путь к css-файлу
        .pipe(sass({outputStyle: "expanded"}))
        .pipe(gulp.dest("./css")) // путь к комплированному css-коду
        .pipe(browserSync.stream());  // browser live server
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./scss/**/*.scss", style); //.on("change", browserSync.reload);
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;