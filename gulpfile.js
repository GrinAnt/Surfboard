const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");
const sassGlob = require("gulp-sass-glob");
// const gcmq = require("gulp-group-css-media-queries");
// const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const svgo = require("gulp-svgo");
const svgSprite = require("gulp-svg-sprite");
// const gulpif = require("gulp-if");

// РАБОТА С ИЗОБРАЖЕНИЯМИ
function images() {
  return src("src/img/icons/svg/*.svg")
    .pipe(
      svgo({
        plugins: [
          {
            removeAttrs: {
              attrs: "(fill|stroke|style|width|height|data.*)",
            },
          },
        ],
      })
    )
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "../../sprite.svg",
          },
        },
      })
    )
    .pipe(dest("src/img/icons/svg"))
    .pipe(browserSync.stream());
}

// ОБРАБОТКА ФАЙЛОВ СТИЛЕЙ
const source = ["node_modules/normalize.css/normalize.css", "src/scss/main.scss"];

function styles() {
  return (
    src(source)
      // .pipe(sourcemaps.init())
      .pipe(concat("style.min.css"))
      .pipe(
        sassGlob({
          ignorePaths: ["main.scss"],
        })
      )
      // .pipe(gcmq())
      .pipe(autoprefixer({ overrideBrowsersList: ["last 10 version"] }))
      // .pipe(scss())
      .pipe(scss({ outputStyle: "compressed" }))
      // .pipe(sourcemaps.write())
      .pipe(dest("src/css"))
      .pipe(browserSync.stream())
  );
}

// ОБРАБОТКА ФАЙЛОВ JAVASCRIPT
function scripts() {
  return (
    src(["src/js/*.js", "!src/js/main.min.js"])
      // .pipe(sourcemaps.init())
      .pipe(concat("main.min.js"))
      .pipe(
        babel({
          presets: ["@babel/env"],
        })
      )
      // .pipe(uglify())
      // .pipe(sourcemaps.write())
      .pipe(dest("src/js"))
      .pipe(browserSync.stream())
  );
}

// ОТСЛЕЖИВАНИЕ ИЗМЕНЕНИЙ ФАЙЛОВ И АВТОМАТИЧЕСКАЯ ИХ ОБРАБОТКА
function watching() {
  watch(["src/scss/**/*.scss"], styles);
  watch(["src/js/*.js", "!src/js/main.min.js"], scripts);
  watch(["src/*.html"]).on("change", browserSync.reload);
  watch(["src/img/icons/svg/*.svg"], images);
}

// АВТОМАТИЧЕСКОЕ ОБНОВЛЕНИЕ СТРАНИЦЫ В БРАУЗЕРЕ
function browser() {
  browserSync.init({
    server: {
      baseDir: "src/",
    },
  });
}

// ОЧИЩАЕТ СОДЕРЖИМОЕ УКАЗАННОЙ ПАПКИ
function cleanDist() {
  return src("dist/*").pipe(clean());
}

// ПЕРЕНОСИТ ФАЙЛЫ, КОТОРЫЕ БУДУТ ОТПРАВЛЕНЫ НА ХОСТИНГ ИЛИ ОТДАВАТЬСЯ КЛИЕНТУ В ПАПКУ DIST (ЧИСТОВИК)
function building() {
  return src(["src/css/style.min.css", "src/img/**/*", "src/js/main.min.js", "src/*.html"], { base: "src" }).pipe(
    dest("dist")
  );
}

exports.styles = styles;
exports.scripts = scripts;
exports.scripts = images;
exports.watching = watching;
exports.browser = browser;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, scripts, images, browser, watching);
// exports.default = parallel(styles, scripts, images);

//
//
//
// ДЛЯ ЗАПУСКА ЗАДАЧИ ПЕРЕНОСА ПРОЕКТА В ПАКУ DIST (ЧИСТОВИК) В КОНСОЛИ НЕОБХОДИМО НАБРАТЬ КОМАНДУ - GULP BUILD
// ДЛЯ ЗАПУСКА ВЫПОЛНЕНИЯ ЗАДАЧ В КОНСОЛИ НЕОБХОДИМО НАБРАТЬ КОМАНДУ - GULP
