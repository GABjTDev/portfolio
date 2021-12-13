"use strict"
import Menu from './assets/js/menu.js';
import Responsive from './assets/js/responsive.js';
import Validation from './assets/js/validation.js';
import scroll from './assets/js/scroll.js';
import { createGallery, filter } from './assets/js/createGallery.js';
import Loading from './assets/js/loading.js';


document.addEventListener("DOMContentLoaded", () => {
    Loading();
    Responsive("habilidades", "(min-width: 1024px)");
    createGallery();
    Menu();
    scroll();
    filter();
    Validation();
});