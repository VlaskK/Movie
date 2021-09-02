/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const advertisement = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector(".promo__bg"),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkBox = addForm.querySelector('[type = "checkbox"]');
    addForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (addInput.value){
            NewMovieAddition(addInput.value);
            addForm.reset();
        }
    });
    
    function NewMovieAddition(newMovie){
        if (newMovie.length > 21){
            newMovie = `${newMovie.substring[0,22]}...`;
        }
        const isFavorite = checkBox.checked;
        movieDB.movies.push(newMovie);
        movieDB.movies.sort();
        movieList.innerHTML = '';
        movieDB.movies.forEach((film, i) => {
                movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
                `;
        });
        if (isFavorite){
            console.log("Added to the favorite");
        }
        deleteMovie();
    }
    function moviesDisplay(){
        movieList.innerHTML = "";
        movieDB.movies.sort();
        movieDB.movies.forEach((film, i) => { 
            movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        });
        deleteMovie();

    }

    function deleteMovie(){
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click',() => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                moviesDisplay();
            });
        });
    }

    function advertisementRemoval(){
        advertisement.forEach(img => img.remove());
    }
    function genreChange(){
        genre.textContent = 'ДРАМА';
    }
    function changePoster(){
        poster.style.backgroundImage = "url(img/bg.jpg)";
    }
    moviesDisplay();
    advertisementRemoval();
    genreChange();
    changePoster();
});


