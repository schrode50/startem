const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');


var lintFiles = ['index.js', 'gulpfile.js', 'lib/**/*.js', 'handlers.js', 'gulpfile.js'];
var testFiles = ['server.js', 'lib/**/*.js', 'test/tests.js'];

gulp.task('test', () => {
  gulp.src([testFiles], { read: false })
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
  gulp.watch(testFiles, ['test']);
});

gulp.task('default', ['lint', 'test', 'watch'], () => {
  console.log('HOLY CRAP THAT WORKED!?!?!?!?');
});
