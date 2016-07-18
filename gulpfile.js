var gulp = require('gulp');
var insalesUp = require('insales-uploader');
var Promise = require('promise');


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
  return Promise.all([
    InsalesUploader.download()
  ])
});

gulp.task('backup', function(){
  return Promise.all([
    InsalesUploader.backup()
  ])
});

gulp.task('stream', function(){
  return InsalesUploader.stream()
});

gulp.task('default', function() {
  return Promise.all([
    InsalesUploader.download().then(function () {
      InsalesUploader.stream()
    })
  ])
});
