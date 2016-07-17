# Gulp and InSales uploader

>**InSales uploader** позволяет локально работать с темами платформы [InSales](http://www.insales.ru/)

## Содержимое gulpfile.js 

```javascript
// Подключение библиотек
var gulp = require('gulp');
var insalesUp = require('insales-uploader');
var Promise = require('promise');

// Настройки для InSales uploader
var options = {
  id: '0123456798',
  token: '0123456798',
  url: 'shop-41324.myinsales.ru',
  theme: '123456',
  http: false,
  root: 'my-shop',
  update: true,
  backup: true
}

// Инициализация InSales uploader
var InsalesUploader = new insalesUp(options)

// Пример задачи для скачивания темы. 
// Метод InsalesUploader.download() обернут в Promise для корректной работы Gulp.js.
gulp.task('download', function(){
  return Promise.all([
    InsalesUploader.download()
  ])
});

// Задача запускает создание резервной копии (в настрйоках должно быть установлено - backup: true).
gulp.task('backup', function(){
  return Promise.all([
    InsalesUploader.backup()
  ])
});

// Задача запускает отслеживание изменений в файлах.
gulp.task('stream', function(){
  return InsalesUploader.stream()
});

// Пример задачи поумолчанию, сначала запускается скачивание, после чего запускаем отслеживание изменений.
gulp.task('default', function() {
  return Promise.all([
    InsalesUploader.download().then(function () {
      InsalesUploader.stream()
    })
  ])
});
```

## Как начать работать

+ Если у вас не установлен node.js, то необходимо установить с [оф. сайта](https://nodejs.org/), желательно последнюю версию.
+ Скачать архив данного репозитория или сделать **git clone**.
+ Установить пакеты через npm.
+ Отредактировать **options** в gulpfile.js в соответствии с вашим магазином.
+ Запустить нужную задачу.

### Установить пакеты через npm

Установка пакетов производится из командной строки (должен быть установлен node.js).

В командной строке находим папку в которую вы скопировали данный репозиторий.

Пример:

```cmd
cd c:\shop-insales
```

Если у вас нет опыта работы с командной строкой, может быть полезна [статья](https://ru.wikipedia.org/wiki/Cd_(%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0)) про команду **cd**.

После того как вы открыли папку, можно запустить установку пакетов:

```cmd
npm install
```

### Options
* id, token — необходимо сгенерировать в бэк-офисе: Приложения -> Разработчикам -> Создать новый ключ доступа;
* url — url магазина из бэк-офиса, ссылка не должна содержать 'http://' и '/';
* theme — id темы;
* http — если в админ панели нет поддержки https, следует выставить значение - true;
* root — корнеевая папка для сохранения темы;
* update — при значении 'true' локальные файлы будут перезаписываться при повторной загрузке;
* backup — при значении 'true' в папке 'backup' будут сохранятся резервные копии темы.

### Запуск задач

Чтобы запустить задачу, в командной строке нужно запустить:

gulp <имя задачи>

Пример:
```
gulp download
```

Задача с именем **default** запускается просто:

```
gulp
```

После того как запустится задача с методом **stream**, все изменения в файлах будут применяться на сайте.

### Структура папок

```
root/
    |-- assets/
        |-- fonts/
        |-- img/
        |-- js/
        |-- media/
        |-- style/
        |-- svg/
    |-- backup/
        |-- 2016-10-15-12-20
    |-- config/
    |-- snippets/
    |-- templates/
```

## Ссылки

### Node.js

* [Дистрибутив Node.js](https://nodejs.org/en/download/)

### Gulp

* [Сайт Gulp.js](http://gulpjs.com/)
* [Базовый курс по Gulp](http://loftblog.ru/material/gulp-js-rabotaem-s-css-concat-minify-rename-notify-watch-dest/)
* [Сринкаст по Gulp](https://learn.javascript.ru/screencast/gulp)