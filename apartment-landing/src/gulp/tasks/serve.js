module.exports = function () {
  $.gulp.task('serve', function () {
    $.browserSync.init({
      server: 'build/'
    });

    $.gulp.watch('./src/sass/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./src/*.html', $.gulp.series('html'));
    $.gulp.watch('./src/js/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('./src/css/**/*.css', $.gulp.series('css'));
    $.gulp.watch('./src/img/**/*.{png,jpg,svg}', $.gulp.series('allimg'));
    $.gulp.watch('./src/img/**/*.{svg}', $.gulp.series('svg'));
  });
};