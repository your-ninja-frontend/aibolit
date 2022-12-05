import gulp from 'gulp';
import imagemin from 'imagemin';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';
import {deleteAsync} from 'del';

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
  return gulp.src(paths.styles.src, {sourcemaps: true})
    .pipe(createSass())
    .pipe(cleanCss())
    .pipe(rename({
      basename: 'style',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest))
}

// Отслеживание изменений стилей

const watchCss = () => {
  gulp.watch(['source/sass/*.scss'], stylesRun)
}

// Сборка файла стилей

const build = gulp.series(clean, styles, watchCss)

export const stylesRun = styles;
export const delAll = clean;
export const watch = watchCss;
export const b = build;
