'use strict';

const gulp = require('gulp'),
  {
    src,
    dest
  } = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  browserSync = require('browser-sync'), // livereload
  babel = require('gulp-babel'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer'), // automating install vendor prefixes
  imageminJpegRecompress = require('imagemin-jpeg-recompress'),
  pngquant = require('imagemin-pngquant'),
  cheerio = require('gulp-cheerio'),
  concat = require('gulp-concat'),
  csso = require('gulp-csso'),
  imagemin = require('gulp-imagemin'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),
  sourcemaps = require('gulp-sourcemaps'),
  svgSprite = require('gulp-svg-sprite'),
  svgmin = require('gulp-svgmin'),
  uglify = require('gulp-uglify'),
  webp = require('gulp-webp'),
  path = {
    //jquery: './js/jquery.js',
    js: './js/**/*.js',
  };

// browserSync config
const config = {
  server: {
    baseDir: "./build"
  },
  notify: false,
  host: 'localhost',
  port: 9000,
  //proxy: "yourlocal.dev",
  logPrefix: "Frontend_History_Action"
};



gulp.task('sass', function () {
  return gulp.src('sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemaps.write(''))
    .pipe(dest('build/css'))
    .pipe(browserSync.stream());
});

const jsFiles = [
  //path.jquery,
  path.js,
];


gulp.task('scripts', function () {
  return gulp.src(jsFiles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(concat('all.js'))
    // .pipe(uglify())
    .pipe(rename('all.min.js'))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('build/js'))
    .on('end', browserSync.reload)
});


gulp.task('copy', function () {
  return gulp.src([
      'fonts/**/*.{woff,woff2}',
      'img/**',
      '*.html'
    ], {
      base: '.'
    })
    .pipe(gulp.dest('build'));
});


gulp.task('clean', function () {
  return del('build');
});

gulp.task('allimg', function () {
  return gulp.src('img/**/*.{jpg,png,svg}')
    .pipe(gulp.dest('build/img'));
});


gulp.task('html', function () {
  return gulp.src('*.html')
    .pipe(gulp.dest('build'))
    .on('end', browserSync.reload)
});

gulp.task('images', function () {
  return gulp.src('build/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.mozjpeg({
        progressive: true
      }),
      imageminJpegRecompress({
        loops: 5,
        min: 65,
        max: 70,
        quality: 'medium'
      }),
      imagemin.optipng({
        optimizationLevel: 3
      }),
      pngquant({
        quality: [0.6, 0.7],
        speed: 5
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('build/img'));
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./build"
    },
    notify: false,
    host: 'localhost',
    port: 9000,
    //proxy: "yourlocal.dev",
    logPrefix: "Frontend_History_Action"
  });

  gulp.watch('sass/**/*.scss', gulp.series('sass'));
  gulp.watch('*.html', gulp.series('html'));
  gulp.watch('js/**/*.js', gulp.series('scripts'));
  gulp.watch('img/**/*.{png,jpg,svg}', gulp.series('allimg'));
});


gulp.task('webp', function () {
  return gulp.src('build/img/**/*.{png,jpg}')
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest('build/img'));
});


gulp.task('svg', function () {
  return gulp.src('img/**/*.svg')
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {
        xmlMode: true
      }
    }))
    .pipe(replace('&gt;', '>'))
    // build svg sprite
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: 'sprite.svg'
        }
      }
    }))
    .pipe(gulp.dest('build/img'));
});


gulp.task('build', gulp.series('clean', 'copy', 'sass', 'scripts', 'images', 'webp', 'svg'));
