var gulp = require('gulp');
var insalesUp = require('insales-uploader');
var options = require('./options');
var autoprefixer = require('gulp-autoprefixer');

var InsalesUploader = new insalesUp(options)

gulp.task('download', function(){
  return InsalesUploader.download()
});

gulp.task('pull', function(){
  return InsalesUploader.pull()
});

gulp.task('push', function(){
  return InsalesUploader.upload()
});

gulp.task('stream', function(){
  return InsalesUploader.stream()
});

gulp.task('watch', function(){
  InsalesUploader.watch(InsalesUploader.paths.script).on('all', function(event, path) {
    return InsalesUploader.src(path)
            .pipe(InsalesUploader.dest())
  });

  InsalesUploader.watch(InsalesUploader.paths.img).on('all', function(event, path) {
    return InsalesUploader.src(path)
            .pipe(InsalesUploader.dest())
  });

  InsalesUploader.watch(InsalesUploader.paths.style).on('all', function(event, path) {
    return InsalesUploader.src(path)
            .pipe(autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .pipe(InsalesUploader.dest())
  });

  InsalesUploader.watch(InsalesUploader.paths.svg).on('all', function(event, path) {
    return InsalesUploader.src(path)
            .pipe(InsalesUploader.dest())
  });

  InsalesUploader.watch(InsalesUploader.paths.assetsMedia).on('all', function(event, path) {
    return InsalesUploader.src(path)
            .pipe(InsalesUploader.dest())
  });

  InsalesUploader.watch(InsalesUploader.paths.fonts).on('all', function(event, path) {
    return InsalesUploader.src(path)
            .pipe(InsalesUploader.dest())
  });

  InsalesUploader.watch(InsalesUploader.paths.media).on('all', function(event, path) {
    return InsalesUploader.src(path)
            .pipe(InsalesUploader.dest())
  });

  InsalesUploader.watch(InsalesUploader.paths.snippets).on('all', function(event, path) {
    return InsalesUploader.src(path)
            .pipe(InsalesUploader.dest())
  });

  return InsalesUploader.watch(InsalesUploader.paths.templates).on('all', function(event, path) {
    return InsalesUploader.src(path)
            .pipe(InsalesUploader.dest())
  });

  InsalesUploader.watch(InsalesUploader.paths.config).on('all', function(event, path) {
    return InsalesUploader.src(path)
            .pipe(InsalesUploader.dest())
  });
});

gulp.task('backup', function(){
  return InsalesUploader.backup()
});

gulp.task('init-assets', function(){
  return InsalesUploader.initAssets()
});

gulp.task('default', function(){
  return InsalesUploader.start()
});
