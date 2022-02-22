module.exports = function () {
  $.gulp.task('allimg', function () {
    return $.gulp.src('src/img/**/*.{png,jpg,svg}')
        .pipe($.gulp.dest('build/img'));
  });
};