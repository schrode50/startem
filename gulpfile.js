const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');


var lintFiles = ['index.js', 'gulpfile.js', 'lib/**/*.js', 'gulpfile.js'];
var testFiles = ['./lib/*.js', 'test/tests.js'];

gulp.task('testz:mocha', () => {
  gulp.src(testFiles)
  .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('lint', () => {
  return gulp.src(lintFiles)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
  gulp.watch(lintFiles, ['lint']);
  // gulp.watch(testFiles, ['test']);
});

gulp.task('default', ['lint', 'watch'], () => {
  console.log('HOLY CRAP THAT WORKED!?!?!?!?');
});
