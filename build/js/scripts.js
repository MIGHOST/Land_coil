"use strict";

var menu = document.querySelector('.navigation__container');
var nav = document.querySelector('.navigation');
var list = document.querySelector('.navigation__list');
var check = document.querySelector('#checkbox');

var showMenu = function showMenu(e) {
  if (e.target) {
    check.checked = false;
  }
};

list.addEventListener("click", showMenu);
"use strict";

console.log("test");