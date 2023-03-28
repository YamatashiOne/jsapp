let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const a = prompt("Какой последний фильм вы смотрели?", ""),
  b = prompt("На сколько вы его оцените?", ""),
  c = prompt("Какой последний фильм вы смотрели?", ""),
  d = prompt("На сколько вы его оцените?", "");
personalMovieDB.movies[d] = c;
personalMovieDB.movies[b] = a;
console.log(personalMovieDB);
