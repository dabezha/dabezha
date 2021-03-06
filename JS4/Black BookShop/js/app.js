'use strict';

var AUTHORS = ['А. С. Пушкин', 'Г. Ф. Лафкрафт', 'С. Кинг', 'Френк Герберт', 'Дарья Донцова', 'Х. Муракамьевич', 'Л. Н. Толстой', 'К. Маркс', 'С. Лукьяненко'];
var TITLES = ['Мастер и Маргарита', '1000 и одна ночь', 'Сказки', 'Сборник стихов №100500', 'Евлампия Романова и Соловей Разбойник', 'Капитал','Мцыри', 'Некрономикон', 'Басни', 'Еще какие-то стихи', 'Супер интересный детектив', 'Еще какое-то название', 'Допустим, книга', 'Дюна', 'Дети Дюны', 'Ну, погоди', 'Крылья, ноги и хвосты', 'Приключения Солнышкина', 'Психо', 'Рыбак с соколинного мыса', 'Как стать программистом за 6 дней', 'Что-то там еще', 'Нужно больше золота', 'Нужно построить зиккурат', 'Еще книга', 'Куда исчезли двемеры', 'Евгений Онегин', 'Преступление и наказание','Война и мир'];
var GENRES= ['Роман', 'Роман-эпопея', 'Повесть', 'Поэма','Рассказ', 'Новелла', 'Притча', 'Сказка', 'Комедия', 'Трагедия', 'Драма']


var getBooks = function () {
	let pages = [];

	for (let i = 0; i < 100; i++) {
		pages.push(Math.floor(Math.random () * 1000) + ' стр.' );
	}

	let price =[];

	for (let i = 0; i < 100; i++) {
		price.push(Math.floor(Math.random () * 1200) + ' руб.' );
	}

	let books = [];
	for (let i = 0; i < 100; i++) {
		let newBook = {
			title : TITLES[Math.floor(Math.random () * TITLES.length)],
			author : AUTHORS[Math.floor(Math.random () * AUTHORS.length)],
			genres : GENRES[Math.floor(Math.random () * GENRES.length)],
			pages : pages[Math.floor(Math.random () * pages.length)],
			price : price[Math.floor(Math.random () * price.length)]
		};
		books.push(newBook);
	}

	return books;
};

var loadBooks = function () {
	let loadedContent = getBooks();
	console.log(loadedContent[3].author);
	let fragment = document.createDocumentFragment();

	for (let i = 0; i < 100; i++) {
		let newParagraph = document.createElement('p');

		newParagraph.innerHTML = i + 1 + '. <b>' + loadedContent[i].title + '</b> / ' + loadedContent[i].author + ' / ' + loadedContent[i].genres + ' / ' + loadedContent[i].pages + ' / ' + loadedContent[i].price;
		fragment.appendChild(newParagraph);
	}

	document.querySelector('.list').appendChild(fragment);
};


window.addEventListener('load', loadBooks);
