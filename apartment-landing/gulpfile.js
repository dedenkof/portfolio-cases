global.$ = {
  gulp: require('gulp'),
  gp:   require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  del: require('del'),
  path: {
    config: require('./src/gulp/config.js'),
    jquery: './src/js/jquery.js',
    scrolloverflow: './src/js/scrolloverflow.js',
    fullpage: './src/js/fullpage.js',
    js: './src/js/**/*.js',
  }
};

$.path.config.forEach(function(path) {
  require(path)();
});