import gulp from 'gulp';
import imagemin from 'imagemin';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';
import { deleteAsync } from 'del';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import buble from 'gulp-buble';

const createSass = gulpSass(sass);

// Объект путей

const paths = {
  styles: {
    src: 'source/sass/main.scss',
    dest: 'build/css/'
  },
  scripts: {
    src: 'source/js/**/*.js',
    dest: 'build/js/'
  }
}

// Отчистка кталога стилей

const clean = () => deleteAsync(['build/css/*.css', 'build/js/*.js']);

// Генерация файла стилей

const styles = () => {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(createSass())
    .pipe(cleanCss())
    .pipe(rename({
      basename: 'style',
      suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
}

// Генерация файла скриптов

const scripts = () => {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(concat('script.min.js'))
    .pipe(buble())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.dest))
}

// Отслеживание изменений стилей

const watchAll = () => {
  gulp.watch(['source/sass/*.scss'], stylesRun)
  gulp.watch(paths.scripts.dest, scriptsRun)
}

// Сборка файла стилей

const build = gulp.series(clean, gulp.parallel(styles, scripts), watchAll)

export const stylesRun = styles;
export const delAll = clean;
export const watch = watchAll;
export const scriptsRun = scripts;
export const b = build;
