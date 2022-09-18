'use strict';

const numberOfFilms = +prompt('Проверка редактирования. Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//Через Цикл While
/*
let m = 0;
while (m<2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
         } else {
            m--;
         }
         m++;
}
*/
//Через цикл For
/*for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
         } else {
            i--;
         }
        
}
*/
//Через цикл do while (не решил)
let m = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
         } else {
            m--;
         }
         m++;
}
while (m<2);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель'); 
} else  if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}
console.log(personalMovieDB);



