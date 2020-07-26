// Selects the main nav nav tag.
let mainNav = document.getElementById('mainNav');
// Selects all of the main menu buttons by class.
// let mainMenuButton = document.getElementsByClassName('mainMenuButton');

const mainExpanderMenu = document.getElementsByClassName('mainExpanderMenu');
// DOM selection of parent LI elements and Objects to Build LI elements off of child UL element.

const firstMainNav = document.getElementById('firstMainNav');
const firstMainNavBuilder = [ {href: "C://Users/keena/Desktop/newPortfolio/secondaryPages/id.html", text: "TAP Basic Setup", class:"liFirstMainNav"},
							 {href: "C://Users/keena/Desktop/newPortfolio/secondaryPages/id.html", text: "Brewing Beer at Home", class:"liFirstMainNav"} ];

const webMainNav = document.getElementById('webMainNav');
const webMainNavBuilder = [ {href: "#", text: "Personal Portfolio", class: "liWebMainNav"},
							{href: "#", text: "Buck Bald Brewing", class: "liWebMainNav"} ];

const aboutMainNav = document.getElementById('aboutMainNav');
const aboutMainNavBuilder = [ {href: "#", text: "About Me", class: "liAboutNav"}, 
							{href: "#", text: "Download Resume", class: "liAboutNav"}];

const thanksMainNav = document.getElementById('thanksMainNav');

const openUL = document.getElementsByClassName('openUL')
const liFirstMainNav = document.getElementsByClassName('liFirstMainNav');
const liWebMainNav = document.getElementsByClassName('liWebMainNav');
const liAboutNav = document.getElementsByClassName('liAboutNav');




/// selects the id of the LI that we are targeting (through domSelector argument). Selects the last child of that LI (which is an empty UL that we will build on.)
/// creates new li element off of the empty UL.  Li attributes include text, class, and href.
function boxAppear (domSelector, objectSelector) {
	console.log('mouseon event triggered');
	objectSelector.forEach( (arg) => {
		let lastChild = domSelector.lastElementChild;
		let newLi = document.createElement('LI');
		newLi.innerHTML = `<a href= "${arg.href}" class="${arg.class}">${arg.text}</a>`;
		lastChild.appendChild(newLi);
	});
}

/// makes the blue box disappear from the now-populated UL element
function boxDisappear (domSelector) {
	console.log('mouseleave event triggered');
	let lastChild = domSelector.lastElementChild;
	while (lastChild.hasChildNodes()) {
		lastChild.removeChild(lastChild.firstChild);
	}
}

/// listens for mouseover of the a tag with class mainMenu button and runs boxAppear()
mainNav.addEventListener('mouseover', () => {
	if (event.target === mainExpanderMenu[0]  && openUL[0].contains(liFirstMainNav[0]) !== true) {
		boxAppear(firstMainNav, firstMainNavBuilder);
		boxDisappear(webMainNav);
		boxDisappear(aboutMainNav);
	} else if (event.target === mainExpanderMenu[1] && openUL[1].contains(liWebMainNav[0]) !== true) {
		boxAppear(webMainNav, webMainNavBuilder);
		boxDisappear(firstMainNav); 
		boxDisappear(aboutMainNav);
	} else if (event.target === mainExpanderMenu[2] && openUL[2].contains(liAboutNav[0]) !== true) {
		boxAppear(aboutMainNav, aboutMainNavBuilder);
		boxDisappear(webMainNav);
		boxDisappear(firstMainNav);
	} else if (event.target === mainExpanderMenu[3]) {
		boxDisappear(webMainNav);
		boxDisappear(aboutMainNav);
		boxDisappear(firstMainNav);
	}
});

// mainNav.addEventListener('mouseleave', () => {
// 	if (event.target !== mainExpanderMenu[0]) {
// 		boxDisappear(firstMainNav);
// 	} else if (event.target !== mainExpanderMenu[1]) {
// 		boxDisappear(webMainNav);
// 	} else if (event.target !== mainExpanderMenu[2])
// 		boxDisappear(aboutMainNav);
// });

mainNav.addEventListener('mouseleave', () => {
	if (event.target !== mainExpanderMenu[0]) {
		boxDisappear(firstMainNav);
	}
});

mainNav.addEventListener('mouseleave', () => {
	if (event.target !== mainExpanderMenu[1]) {
		boxDisappear(webMainNav);
	}
});

mainNav.addEventListener('mouseleave', () => {
	if (event.target !== mainExpanderMenu[2]) {
		boxDisappear(aboutMainNav);
	}
});




// When you mouse over onto a new mainExpanderMenu, run boxDisappear on the adjacent menus w/in the mainNav mouseover function.

