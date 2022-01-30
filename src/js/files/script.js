// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
// Подключение функции удаления классов
import { removeClasses } from "./functions.js";

window.onload = function () {
	document.addEventListener('click', actions);

	function actions(e) {
		const targetElement = e.target;
		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				removeClasses(document.querySelectorAll('.menu__item._hover'), '_hover');
			}
		}
		if (window.innerWidth <= 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
		}


		if (targetElement.classList.contains('search-header__btn-mob')) {
			document.querySelector('.search-header').classList.toggle('_active');
		} else if (!targetElement.closest('.search-header') && document.querySelector('.search-header._active')) {
			document.querySelector('.search-header').classList.remove('_active');
		}

	}
}