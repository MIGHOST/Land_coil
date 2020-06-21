const menu = document.querySelector('.navigation__container');
const nav = document.querySelector('.navigation');
const list = document.querySelector('.navigation__list');
const listRu = document.querySelector('.navigation__list-ru');
const check = document.querySelector('#checkbox');

const showMenu = e => {
  if (e.target) {
    check.checked = false;
  }
};
list.addEventListener('click', showMenu);
listRu.addEventListener('click', showMenu);
