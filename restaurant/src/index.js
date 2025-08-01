import { home, menu, contact } from "./restaurant.js";

home();

function handleHome() {
    home();
}

function handleMenu() {
    menu();
}

function handleContact() {
    contact();
}

// Hacer las funciones disponibles globalmente para que el HTML pueda acceder a ellas
window.handleHome = handleHome;
window.handleMenu = handleMenu;
window.handleContact = handleContact;