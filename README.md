  # Gulp конфиг для запуска методов InSales uploader

>**[InSales uploader](https://github.com/insales/insales-uploader)** позволяет локально работать с темами платформы [InSales](http://www.insales.ru/)

*   [Как начать работать](#Как-начать-работать)
*   [Видео по установке](#Видео-по-установке)
*   [Настройки](#options)
*   [Запуск задач](#Запуск-задач)
*   [Структура папок](#Структура-папок)
*   [Ссылки](#Ссылки)

[![npm version](https://badge.fury.io/js/insales-uploader.svg)](https://badge.fury.io/js/insales-uploader)

## Как начать работать

+ Если у вас не установлен node.js, то необходимо установить с [оф. сайта](https://nodejs.org/), желательно последнюю версию.
+ Скачать архив данного репозитория или сделать **git clone**.
+ Установить пакеты через npm.
+ Отредактировать **options.js** в соответствии с вашим магазином.
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
* excludeFiles - массив путей, которые будут игнорироваться при отслеживании изменений.

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

Если команда `gulp` не найдена, установите gulp глобально. `npm i gulp -g`

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

- [Домашняя страница модуля insales-uploader](https://insales.github.io/insales-uploader/)

### Разработка тем InSales

- [Расширенная документация](http://liquidhub.ru/)

### Node.js

* [Дистрибутив Node.js](https://nodejs.org/en/download/)

### Gulp

* [Сайт Gulp.js](http://gulpjs.com/)
* [Базовый курс по Gulp](http://loftblog.ru/material/gulp-js-rabotaem-s-css-concat-minify-rename-notify-watch-dest/)
* [Сринкаст по Gulp](https://learn.javascript.ru/screencast/gulp)

### Полезные ссылки

- [Избранное](https://github.com/VladimirIvanin/favorites)
- [Отправка сообщений](https://github.com/VladimirIvanin/InSalesFeedback)
- [Работа со сравнением](https://github.com/VladimirIvanin/CompareProducts)
- [Обновление информации в корзине](https://github.com/VladimirIvanin/CartMan)
- [Плагин для обновления информации товара](https://github.com/VladimirIvanin/variantsModifier)
- [Ранее просмотренные товары](https://github.com/VladimirIvanin/RecentlyView)
- [Определение местоположения пользователя](https://github.com/VladimirIvanin/geoManager)
- [Табы на jQuery](https://github.com/VladimirIvanin/dataTabs)
