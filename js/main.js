// ПЕРЕМЕННЫЕ
let hamburger = document.querySelector('.hamburger');
let navigation = document.querySelector('.navigation');

// МЕНЮ ГАМБУРГЕР И ПОЯВЛЕНИЕ МЕНЮ
hamburger.addEventListener('click', function(event) {
	hamburger.classList.toggle('hamburger--active');	
	navigation.classList.toggle('navigation--active');
});


