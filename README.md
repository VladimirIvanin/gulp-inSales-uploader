# Gulp and InSales uploader

>**[InSales uploader](https://github.com/brainmurder/insales-uploader)** позволяет локально работать с темами платформы [InSales](http://www.insales.ru/)

[![npm version](https://badge.fury.io/js/insales-uploader.svg)](https://badge.fury.io/js/insales-uploader)

## Содержимое gulpfile.js

```javascript
// Подключение библиотек
var gulp = require('gulp');
var insalesUp = require('insales-uploader');

// Настройки для InSales uploader
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

// Инициализация InSales uploader
var InsalesUploader = new insalesUp(options)

// Пример задачи для скачивания темы.
gulp.task('download', function(){
  return InsalesUploader.download()
});

// Задача запускает создание резервной копии.
gulp.task('backup', function(){
  return InsalesUploader.backup()
});

// Задача запускает создание резервной копии с созданием архива.
gulp.task('backup-to-zip', function(){
  return InsalesUploader.backupToZip()
});

// Задача запускает отслеживание изменений в файлах.
gulp.task('stream', function(){
  return InsalesUploader.stream()
});

// Пример задачи поумолчанию, сначала запускается скачивание, после чего запускаем отслеживание изменений.
gulp.task('default', ['download'], function() {
  return gulp.start('stream');
});
```

## Как начать работать

+ Если у вас не установлен node.js, то необходимо установить с [оф. сайта](https://nodejs.org/), желательно последнюю версию.
+ Скачать архив данного репозитория или сделать **git clone**.
+ Установить пакеты через npm.
+ Отредактировать **options** в gulpfile.js в соответствии с вашим магазином.
+ Запустить нужную задачу.
+ Переодически следить за обновлением пакета **[InSales uploader](https://github.com/brainmurder/insales-uploader)** (чтобы обновить пакет, в консоли нужно запустить `npm update`).

## Видео по установке

+ [Создание ключа доступа](https://youtu.be/SSUdqtJFEYE)
+ [Установка npm пакетов](https://youtu.be/A8OkEZ_Vay0)
+ [Добавление настроек](https://youtu.be/OOdUPf7__g0)

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
* startBackup — при значении 'true' во время загрузки темы через метод **download** в папке 'backup' будут сохранятся резервные копии темы.
* backup — 'zip' или 'simple', если zip то создаются архивы.

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
    |-- config/
    |-- snippets/
    |-- templates/
    |-- backup/
        |-- config
        |-- media
        |-- snippets
        |-- templates
```
## Возможные ошибки (ждут исправления)

+ Ошибка при создании сниппета. Сниппет создастся, но платформа может выдать ошибку.
+ Не скачивается пустой settings.html.

О проблемах в работе пишите [сюда](https://github.com/brainmurder/InSales-uploader-gulp-test/issues)


## Ссылки

### Node.js

* [Дистрибутив Node.js](https://nodejs.org/en/download/)

### Gulp

* [Сайт Gulp.js](http://gulpjs.com/)
* [Базовый курс по Gulp](http://loftblog.ru/material/gulp-js-rabotaem-s-css-concat-minify-rename-notify-watch-dest/)
* [Сринкаст по Gulp](https://learn.javascript.ru/screencast/gulp)
