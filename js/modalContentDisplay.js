

//aboutMainNav and liAboutNav were both declared in mainMenu.js

const modalBacksplash = document.getElementById('modalBacksplash');
const linkItem = document.getElementsByClassName('linkItem');

//listens for clicks on the the main nav button and it's first child in large screens.  Displays modalBacksplash and inserts the div.
//listens for clicks on the closeButton div and closes the modalBacksplash and all it's children when clicked.  
aboutMainNav.addEventListener('click', (event) => {
	if (event.target !== liAboutNav[1]) {
		modalBacksplash.style.display = "flex";
	}
	const closeButton = document.getElementById('closeButton');
	closeButton.addEventListener('click', ()=>{
		modalBacksplash.style.display = "";
	});
});

//selects the second item in the sandwich menu and adds event listener.  "Closes" the expanded menu and generates the modalBacksplash
//all it's children
linkItem[2].addEventListener('click', ()=>{
	expandedMenu.style.display = 'none';
	expandedMenuLander.style.display = 'none';
	modalBacksplash.style.display= "flex";
	closeButton.addEventListener('click', ()=>{
		modalBacksplash.style.display = "";
	});
});
