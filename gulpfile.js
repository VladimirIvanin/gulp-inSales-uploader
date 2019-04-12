var gulp = require('gulp');
var insalesUp = require('insales-uploader');
var options = require('./options');
var autoprefixer = require('insales-uploader-autoprefixer')
var imagemin = require('gulp-imagemin');
var bs = require('browser-sync').create('insales_server');

var IU = new insalesUp(options)

gulp.task('download', function(){
  return IU.download()
});

gulp.task('downloadTemplates', function(){
  return IU.downloadTemplates()
});

gulp.task('downloadSnippets', function(){
  return IU.downloadSnippets()
});

gulp.task('downloadConfig', function(){
  return IU.downloadConfig()
});

gulp.task('downloadMedia', function(){
  return IU.downloadMedia()
});

gulp.task('downloadFiles', function(){
  return IU.downloadFiles()
});

gulp.task('pull', function(){
  return IU.pull()
});

gulp.task('push', function(){
  return IU.upload()
});

gulp.task('uploadFiles', function(){
  return IU.uploadFiles()
});

var optionDefault = {
  proxy: IU.options.themeUrl.replace('https', 'http'),
  serveStatic: [IU.options.theme.root],
  reloadDebounce: 5000,
  reloadDelay: 2000,
  https: false
};

gulp.task('stream', function(){
  bs.init(optionDefault);
  return IU.stream(function () {
  	bs.reload();
  })
})

gulp.task('watch', function(){
  // для минификации используйте https://www.npmjs.com/package/gulp-uglify
  IU.watch(IU.paths.script, function(stream) {
    return stream
            .pipe(IU.dest())
  });

  IU.watch(IU.paths.img, function(stream) {
    return stream
            .pipe(imagemin())
            .pipe(IU.dest())
  });

  IU.watch(IU.paths.style, function(stream) {
    return stream
            .pipe(autoprefixer({
              browsers: ['last 10 versions'],
              cascade: true
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
