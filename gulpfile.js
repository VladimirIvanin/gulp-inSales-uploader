var gulp = require('gulp');
var insalesUp = require('insales-uploader');
var options = require('./options');
var autoprefixer = require('gulp-autoprefixer');

var IU = new insalesUp(options)

gulp.task('download', function(){
  return IU.download()
});

gulp.task('pull', function(){
  return IU.pull()
});

gulp.task('push', function(){
  return IU.upload()
});

gulp.task('stream', function(){
  return IU.stream()
});

gulp.task('watch', function(){
  IU.watch(IU.paths.script, function(stream) {
    return stream
            .pipe(IU.dest())
  });

  IU.watch(IU.paths.img, function(stream) {
    return stream
            .pipe(IU.dest())
  });

  IU.watch(IU.paths.style, function(stream) {
    return stream
            .pipe(autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .pipe(IU.dest())
  });

  IU.watch(IU.paths.svg, function(stream) {
    return stream
            .pipe(IU.dest())
  });

  IU.watch(IU.paths.assetsMedia, function(stream) {
    return stream
            .pipe(IU.dest())
  });

  IU.watch(IU.paths.fonts, function(stream) {
    return stream
            .pipe(IU.dest())
  });

  IU.watch(IU.paths.media, function(stream) {
    return stream
            .pipe(IU.dest())
  });

  IU.watch(IU.paths.snippets, function(stream) {
    return stream
            .pipe(IU.dest())
  });

  return IU.watch(IU.paths.templates, function(stream) {
    return stream
            .pipe(IU.dest())
  });

  IU.watch(IU.paths.config, function(stream) {
    return stream
            .pipe(IU.dest())
  });
});

gulp.task('backup', function(){
  return IU.backup()
});

gulp.task('init-assets', function(){
  return IU.initAssets()
});

gulp.task('default', function(){
  return IU.start()
});
