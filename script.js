'use strict';
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { 
            //null - проверяет не нажал ли ОТМЕНА, isNaN (is not a number) - прворяет является ли то что ввел числом.
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''), //str.trim() обрезает пробелы внутри -
                                                                              //строки после и перед str. Почему-то если 
                                                                              //прописать сразу тут перестает работать
                                                                              //нажатие пользователем "Отмена"
                  b = prompt('На сколько оцените его?', '');                          
                 if (a != null && b != null && a.trim() != '' && b.trim() != '' && a.length < 50 && b.length < 50) {
                    personalMovieDB.movies[a] = b;
                 } else {
                    i--;
                 }
                
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель'); 
        } else  if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let qiz = prompt (`Ваш любимый жанр под номером ${i}`,'');
            while (qiz == '' || qiz == null || !isNaN(qiz)) {
                qiz = prompt (`Ваш любимый жанр под номером ${i}`,'');
            }
            personalMovieDB.genres[i-1] = qiz;
        }
        personalMovieDB.genres.forEach((item, i) => {  //стрелочаня функция. 
            console.log(`Любимый жанр #${i+1} - это ${item}  `);
        });
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat) {
             personalMovieDB.privat = false;
        } else {
             personalMovieDB.privat = true;
        }
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB(); 
personalMovieDB.showMyDB(personalMovieDB.privat);


