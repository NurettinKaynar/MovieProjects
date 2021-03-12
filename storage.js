/******************************************** */
//ES6 Öncesi
/******************************************* */
// function Storage() {}

// Storage.prototype.addFilmToStorage = function (newFilm) {
//   let films = this.getFilmsFromStorage();
//   films.push(newFilm);
//   localStorage.setItem("films", JSON.stringify(films));
// };
// Storage.prototype.getFilmsFromStorage = function () {
//   let films;
//   if (localStorage.getItem("films") === null) {
//     films = [];
//   } else {
//     films = JSON.parse(localStorage.getItem("films"));
//   }
//   return films;
// };
// Storage.prototype.deleteFromStorage = function (filmTitle) {
//   let films = this.getFilmsFromStorage();
//   films.forEach(function (film, index) {
//     if (film.title === filmTitle) {
//       films.splice(index, 1);
//     }
//   });
//   localStorage.setItem("films", JSON.stringify(films));
// };

// Storage.prototype.clearAllFilmsFromStorage = function () {
//   localStorage.removeItem("films");
// };

/**************************************** */
//ES6 Sonrası
/**************************************** */

class Storage {
  static addFilmToStorage(newFilm) {
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
  }
  static getFilmsFromStorage() {
    let films;
    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
  }
  static deleteFromStorage(filmTitle) {
    let films = this.getFilmsFromStorage();
    films.forEach(function (film, index) {
      if (film.title === filmTitle) {
        films.splice(index, 1);
      }
    });
    localStorage.setItem("films", JSON.stringify(films));
  }

  static clearAllFilmsFromStorage() {
    localStorage.removeItem("films");
  }
}
