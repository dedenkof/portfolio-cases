module.exports = function () {
  $.gulp.task('copyimg', function () {
    return $.gulp.src('./src/img/**')
        .pipe($.gulp.dest('build/img/'));

  });
};