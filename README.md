  # Gulp конфиг для запуска методов InSales uploader

>**[InSales uploader](https://github.com/brainmurder/insales-uploader)** позволяет локально работать с темами платформы [InSales](http://www.insales.ru/)

*   [Содержимое gulpfile.js](#Содержимое-gulpfilejs)
*   [Как начать работать](#Как-начать-работать)
*   [Видео по установке](#Видео-по-установке)
*   [Настройки](#options)
*   [Запуск задач](#Запуск-задач)
*   [Структура папок](#Структура-папок)
*   [Ссылки](#Ссылки)

[![npm version](https://badge.fury.io/js/insales-uploader.svg)](https://badge.fury.io/js/insales-uploader)

## Содержимое gulpfile.js

```javascript
// Подключение библиотек
var gulp = require('gulp');
var insalesUp = require('insales-uploader');
var watch = require('gulp-watch');

// Настройки для InSales uploader
var options = {
  account: {
    id: '0123456798',
    token: '0123456798',
    url: 'shop-41324.myinsales.ru',
    http: true
  },
  theme: {
    id: '123456',
    root: 'my-shop',
    update: true,
    excludeFiles: ['**/*.DS_Store', '**/*.log'],
    startBackup: true
  },
  tools:{
    debugMode: false,
    openBrowser: {
      start: true,
      app: 'firefox'
    },
    browserSync: {
      start: false,
      uploadRestart: false,
      browser: 'firefox'
    },
    autoprefixer: {
      use: true,
      config: {
          browsers: ['last 21 versions'],
          cascade: true
      }
    },
    eslint: {
      use: true,
      stopOnFail: true
    },
    stylelint: {
      use: true,
      stopOnFail: true,
      config: {
        "rules": {
          "property-no-unknown": true
        }
      }
    }
  }
}

// Инициализация InSales uploader
var InsalesUploader = new insalesUp(options)

// Пример задачи для скачивания темы.
gulp.task('download', function(){
  return InsalesUploader.download()
});

// Задача запускает загрузку файлов на сервер.
gulp.task('upload', function(){
  return InsalesUploader.upload({
    update: true
  })
});

// Загрузка темы на компьютер. Перед началом загрузки, все локальные файлы удаляются
gulp.task('pull', function(){
  return InsalesUploader.pullTheme()
});

// Загрузка темы на сервер с полным обновлением файлов. 
gulp.task('push', function(){
  return InsalesUploader.pushTheme()
});

// Задача запускает создание резервной копии с созданием архива.
gulp.task('backup', function(){
  return InsalesUploader.backup()
});

// Задача запускает отслеживание изменений в файлах.
gulp.task('stream', function(){
  return InsalesUploader.stream()
});

// Задача запускает отслеживание изменений в файлах с помощью пакета gulp-watch
gulp.task('watch', function(){
  return watch(InsalesUploader.paths.toWatch, function (_vinyl) {
    InsalesUploader.triggerFile(_vinyl.event, _vinyl.path);
  });
});

// Задача запускает сортировку аcсетов из папки media в папку assets
gulp.task('init-assets', function(){
  return InsalesUploader.initAssets()
});

// Задача запускает сравнивание списка файлов на сервере со списком в локальной копии
gulp.task('diff-assets', function(){
  return InsalesUploader.diffLocalAssets()
});

// Задача запускает открытие браузера
gulp.task('open-browser', function(){
  return InsalesUploader.openBrowser()
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
#### account
* id, token — необходимо сгенерировать в бэк-офисе: Приложения -> Разработчикам -> Создать новый ключ доступа;
* url — url магазина из бэк-офиса, ссылка не должна содержать 'http://' и '/';
* http — если в админ панели нет поддержки https, следует выставить значение - true;

#### theme
* id — id темы;
* root — корнеевая папка для сохранения темы;
* update — при значении 'true' локальные файлы будут перезаписываться при повторной загрузке;
* startBackup — при значении 'true' во время загрузки темы через метод **download** в папке 'backup' будут сохранятся резервные копии темы.
* excludeFiles - массив путей, которые будут игнорироваться при отслеживании изменений.

#### tools
* browserSync — синхронизация браузера и изменений в файлах. Синхронизация включается при запуске метода `stream`. Поумолчанию перезагрузка браузера отключена для загружаемых файлов, перезагрузка срабатывает на изменение и удаление. Так же можно указать доп. параметры согласно api [browsersync](https://www.browsersync.io/docs/options). `Возможен редирект на основной домен, в этом случае в конфиге попробуйте указать основной домен.
* openBrowser — открытие браузера при запуске метода `stream`. Чтобы включить данную опцию, в объект свойства нужно добавить `start: true`. Будет открыт браузер поумолчанию. Для старта сайта в определенном браузере, нужно добавить свойство `app`. Свойство `app` специфично работает в разных операционных системах, например чтобы открыть `Chrome`, пользователям MacOs нужно указать `google chrome`, пользователям Linux `google-chrome`, пользователям Windows `chrome`.
* debugMode — логирование операций.
* stylelint — линтер стилей, можно добавлять свои настройки согласно api [stylelint](https://stylelint.io/user-guide/rules/). `use` - использовать линтер? `stopOnFail` - останавливать отправление файла на сервер при ошибках?
* autoprefixer — добавление префиксов к стилям, можно добавлять свои настройки согласно api [autoprefixer](https://github.com/postcss/autoprefixer). `use` - использовать autoprefixer?
* eslint — js линтер, можно добавлять свои настройки согласно api [ESLint ](http://eslint.org/docs/rules/). `use` - использовать ESLint?

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

Папки `media` и `assets`, дублирут друг друга. Когда запущен стрим изменения попадают в обе папки. Так же при скачивании файлы раскладываются в `media` и `assets`. Assets создаётся для удобства работы.

Папка `media` является приоритетной, так как она предусмотрена архитектурой тем на платформе InSales.

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
    |-- media/
    |-- snippets/
    |-- templates/
    |-- backup/
```

О проблемах в работе пишите [сюда](https://github.com/brainmurder/InSales-uploader-gulp-test/issues)


## Ссылки

### Разработка тем InSales

- [Расширенная документация](http://liquidhub.ru/)
- [Сборщик шаблонов](https://github.com/VladimirIvanin/insales-template-builder)

### Node.js

* [Дистрибутив Node.js](https://nodejs.org/en/download/)

### Gulp

* [Сайт Gulp.js](http://gulpjs.com/)
* [Базовый курс по Gulp](http://loftblog.ru/material/gulp-js-rabotaem-s-css-concat-minify-rename-notify-watch-dest/)
* [Сринкаст по Gulp](https://learn.javascript.ru/screencast/gulp)

### Полезные ссылки

- [Избранное](https://github.com/VladimirIvanin/favorites)
- [Отправка сообщений](https://github.com/VladimirIvanin/InSalesFeedback)
- [Плагин для обновления информации товара](https://github.com/VladimirIvanin/variantsModifier)
- [Ранее просмотренные товары](https://github.com/VladimirIvanin/RecentlyView)
- [Определение местоположения пользователя](https://github.com/VladimirIvanin/geoManager)
- [Табы на jQuery](https://github.com/VladimirIvanin/dataTabs)
