import Menu from './assets/js/menu.js';
import Responsive from './assets/js/responsive.js';
import Validation from './assets/js/validation.js';
import scroll from './assets/js/scroll.js';
import { createGallery, filter } from './assets/js/createGallery.js';


document.addEventListener("DOMContentLoaded", () => {
    Responsive("habilidades", "(min-width: 1024px)");
    Menu();
    scroll();
    createGallery();
    filter();
    Validation();
});