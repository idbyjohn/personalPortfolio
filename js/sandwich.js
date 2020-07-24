





//TO DO:  MAKE THESE TWO SEPERATE BLOCKS OF CODE INTO A SINGLE FUNCTION IF POSSIBLE.  USE TEMPLATE LITERALS TO MINIMIZE HTML.


// THIS IS THE CODE FOR THE SANDWICH MENU ONLY!!!!!!

let sandwichNav = document.querySelector('#sandwichNav');
let expandedMenu = document.querySelector('#expandedMenu');
let expandedMenuLander = document.querySelector('#expandedMenuLander');
let tagLineLander = document.querySelector('.tagLine');

sandwichNav.addEventListener('click', function () {
	if (expandedMenu.style.display === 'block' && expandedMenuLander.style.display === 'block') {
		expandedMenu.style.display = 'none';
		expandedMenuLander.style.display = 'none'
	} else {
		expandedMenu.style.display = 'block';
		expandedMenuLander.style.display = 'block';
	}
});

expandedMenu.addEventListener('mouseon', function () {
	expandedMenu.style.display = "block";
});

expandedMenu.addEventListener('mouseleave', function () {
	expandedMenu.style.display = "none";
});

tagLineLander.addEventListener('click', function () {
	expandedMenu.style.display = "none";
	expandedMenuLander.style.display = "none";
});

expandedMenuLander.addEventListener('click', function () {
	expandedMenu.style.display = "none";
	expandedMenuLander.style.display = "none";
});



// let sandwichNav = document.querySelector('#sandwichNav');
// let expandedMenuWrapper = document.querySelector('#expandedMenuWrapper');
// let expandedMenuLander = document.querySelector('#expandedMenuLander');
// let tagLineLander = document.querySelector('.tagLine');


// sandwichNav.addEventListener('click', () => {
// 	expandedMenuWrapper.style.height = `312px`;
// });
