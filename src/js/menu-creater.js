import menu from '../menu.json';
import dishesTemplate from '../templates/menu-template.hbs';

const menuList = document.querySelector('.js-menu');
const menuMarkup = dishesTemplate(menu);

menuList.insertAdjacentHTML('beforeend', menuMarkup);