var gulp = require('gulp');
var insalesUp = require('insales-uploader');

var options = {
  account: {
    id: '0123456798',
    token: '0123456798',
    url: 'shop-41324.myinsales.ru',
    http: false
  },
  theme: {
    id: '123456',
    root: 'my-shop',
    backup: 'zip',
    update: true,
    startBackup: true
  }
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

gulp.task('backup-to-zip', function(){
  return InsalesUploader.backupToZip()
});

gulp.task('init-assets', function(){
  return InsalesUploader.initAssets()
});

gulp.task('default', ['download'], function() {
  return gulp.start('stream');
});

