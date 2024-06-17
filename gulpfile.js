const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json', {
  include: ['baileys/**/*.ts']
});

gulp.task('build-baileys', function() {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('lib'));
});