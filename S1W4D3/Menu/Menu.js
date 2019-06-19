
const toggleMenu = () => {
  menu.classList.toggle('menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)

TweenMax.from('.menu-button', 2, {opacity:0, scale:0, ease:Bounce.easeOut})

TweenMax.from('h1', 1, {x:300, opacity:0, scale: 0.5})