const iconbar = document.querySelector(".iconbar");
const navMenu = document.querySelector(".nav-menu");


// console.log(iconbar + navMenu);

// agregamos el evento al iconbar
iconbar.addEventListener("click", mobileMenu);

// agrega clase active a iconbar y nav-menu atraves de la funcion mobilmenu
function mobileMenu() {

  // toggle agregar ó elimina un nombre de clase de un elemento con JavaScript.
  iconbar.classList.toggle("active");
  navMenu.classList.toggle("active");

  // console.log(iconbar.classList + navMenu.classList);
}