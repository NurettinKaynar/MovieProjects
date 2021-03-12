/******************************************* */
//ES6 Öncesi
/********************************************** */
// //Seçimler
// const form = document.getElementById("film-form");
// const titleElement = document.querySelector("#title");
// const directorElement = document.querySelector("#director");
// const urlElement = document.querySelector("#url");
// const secondCardBody = document.querySelectorAll(".card-body")[1];
// const clearButton = document.getElementById("clear-films");
// //UI Objesi
// const ui = new UI();

// //Storage Objesi Üretme
// const storage = new Storage();

// //Tüm Eventleri Yükleme

// eventListeners();

// function eventListeners() {
//   form.addEventListener("submit", addFilm);
//   document.addEventListener("DOMContentLoaded", function () {
//     let films = storage.getFilmsFromStorage();
//     ui.loadAllFilms(films);
//   });
//   secondCardBody.addEventListener("click", deleteFilm);
//   clearButton.addEventListener("click", clearAllFilms);
// }

// function addFilm(e) {
//   const title = titleElement.value;
//   const director = directorElement.value;
//   const url = urlElement.value;

//   if (title === "" || director === "" || url === "") {
//     //Hata
//     ui.displayMessage("Tüm Alanları Doldurun...", "danger");
//   } else {
//     //Devam
//     const newFilm = new Film(title, director, url);
//     ui.addFilmToUI(newFilm); // Arayüze filme ekleme
//     storage.addFilmToStorage(newFilm); //Storage'a film Ekleme
//     ui.displayMessage("Film Başarıyla Eklendi...", "success");
//   }

//   ui.clearInputs(titleElement, directorElement, urlElement);

//   e.preventDefault();
// }

// function deleteFilm(e) {
//   if (e.target.id === "delete-film") {
//     ui.deleteFilmFromUI(e.target);
//     storage.deleteFromStorage(
//       e.target.parentElement.previousElementSibling.previousElementSibling
//         .textContent
//     );
//     ui.displayMessage("Film Başarıyla Silindi.", "success");
//   }
// }

// function clearAllFilms() {
//   if (confirm("Silmek İstediğinizden Emin Misiniz ?")) {
//     ui.clearAllFilmsFromUI();
//     storage.clearAllFilmsFromStorage();
//     ui.displayMessage("Tüm Filmler Kullanıcı Tarafından Silindi", "danger");
//   } else {
//     ui.displayMessage("Silme İşlemi İptal edildi", "success");
//   }
// }

/************************************************************* */
// ES6 Sonrası
/*********************************************************** */
//Seçimler
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-films");

//Tüm Eventleri Yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", () => {
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
  });
  secondCardBody.addEventListener("click", deleteFilm);
  clearButton.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    //Hata
    UI.displayMessage("Tüm Alanları Doldurun...", "danger");
  } else {
    //Devam
    const newFilm = new Film(title, director, url);
    UI.addFilmToUI(newFilm); // Arayüze filme ekleme
    Storage.addFilmToStorage(newFilm); //Storage'a film Ekleme
    UI.displayMessage("Film Başarıyla Eklendi...", "success");
  }

  UI.clearInputs(titleElement, directorElement, urlElement);

  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    UI.displayMessage("Film Başarıyla Silindi.", "success");
  }
}

function clearAllFilms() {
  if (confirm("Silmek İstediğinizden Emin Misiniz ?")) {
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    UI.displayMessage("Tüm Filmler Kullanıcı Tarafından Silindi", "danger");
  } else {
    UI.displayMessage("Silme İşlemi İptal edildi", "success");
  }
}
