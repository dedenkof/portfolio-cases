module.exports = function () {
  $.gulp.task('build', $.gulp.series('clean', 'copyhtml', 'copyimg', 'sass', 'scripts', 'css', 'images', 'svg'));
};

