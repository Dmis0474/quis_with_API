const del = require("del");
const gulp = require("gulp");
const scss = require("gulp-sass");
const minify = require("gulp-minify");
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync");
const pngquant = require("imagemin-pngquant");
const inject = require("gulp-inject");

const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require("gulp-uglifyjs");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", () =>
  gulp
    .src("source/scss/**/*.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7", "ie 6"], {
        cascade: true,
      })
    )
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest("public/css"))
);

gulp.task("browser-sync", () => {
  browserSync({
    server: {
      baseDir: "public",
    },
    notify: false,
  });
});



gulp.task(
  "css-libs",
  gulp.parallel("sass", () =>
    gulp
      .src("**/css/libs.css", { allowEmpty: true })
      .pipe(cssnano())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest("public/css"))
  )
);

gulp.task("javascript", () =>
  gulp.src("public/jsmin/**/*.js").pipe(browserSync.reload({ stream: true }))
);

gulp.task("jsmin", () =>
  gulp.src(["source/js/**/*.js"]).pipe(minify()).pipe(gulp.dest("public/jsmin"))
);


gulp.task("inject", () => {
  var target = gulp.src("source/**/*.html")
  var source = gulp.src(["public/jsmin/*.js", "public/css/**.css"], { read: false})
  target.pipe(inject(source,{ ignorePath: 'public'}))
 .pipe(gulp.dest("public"));
})



gulp.task(
  "watch",
  gulp.parallel(
    "browser-sync",
    "css-libs",
    "jsmin",
    // "scripts",
    "inject",
    () => {
      gulp.watch("source/scss/**/*.scss", gulp.parallel("sass"));
      gulp.watch("source/*.html", gulp.parallel("inject"));
      gulp.watch("source/js/**/*.js", gulp.parallel("javascript"));
    }
  )
);

gulp.task("img", () => {
  gulp
    .src("public/img/**/*")
    .pipe(
      cache(
        imagemin({
          interlaced: true,
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          use: [pngquant()],
        })
      )
    )
    .pipe(gulp.dest("dist/img"));
});




gulp.task("clean", () => del.sync("public"));


gulp.task(
  "build",
  gulp.parallel("clean", "img", "jsmin", "sass", () => {
    const buildCss = gulp
      .src(["app/css/main.css", "app/css/libs.min.css"])
      .pipe(gulp.dest("dist/css"));

    const buildFonts = gulp.src("app/fonts/**/*").pipe(gulp.dest("dist/fonts"));

    const buildJs = gulp.src("app/js/**/*").pipe(gulp.dest("dist/js"));

    const buildHtml = gulp.src("app/*.html").pipe(gulp.dest("dist"));
  })
);

gulp.task("clear", (callback) => cache.clearAll());
