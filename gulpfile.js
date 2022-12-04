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

const deletedFileCss = () => deleteAsync(['build/css/*.css']);

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

export const stylesRun = styles;
export const delCss = deletedFileCss;
