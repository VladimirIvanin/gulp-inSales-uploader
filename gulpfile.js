var gulp = require('gulp');
var insalesUp = require('insales-uploader');

var options = {
  id: '0123456798',
  token: '0123456798',
  url: 'shop-41324.myinsales.ru',
  theme: '123456',
  http: false,
  root: 'my-shop',
  update: true,
  startBackup: true
}

var InsalesUploader = new insalesUp(options)

gulp.task('download', function(){
  return InsalesUploader.download()
});

gulp.task('stream', function(){
  return InsalesUploader.stream()
});

gulp.task('backup', function(){
  return InsalesUploader.backup()
});

gulp.task('release', function(){
  return InsalesUploader.release()
});

gulp.task('default', ['download'], function() {
  return gulp.start('stream');
});

