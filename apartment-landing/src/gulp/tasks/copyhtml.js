module.exports = function () {
  $.gulp.task('copyhtml', function () {
    return $.gulp.src('./src/*.html')
        .pipe($.gulp.dest('build/'));
  });
};