// Selects the main nav nav tag.
let mainNav = document.getElementById('mainNav');
// Selects all of the main menu buttons by class.
let mainMenuButton = document.getElementsByClassName('mainMenuButton');

// DOM selection for the boxAppear function.
let firstMainNav = document.getElementById('firstMainNav');
let webMainNav = document.getElementById('webMainNav');
let aboutMainNav = document.getElementById('aboutMainNav');
let thanksMainNav = document.getElementById('thanksMainNav');

/// makes a blue box appear in the empty UL element 
function boxAppear (domSelector, classCreator) {
	let lastChild = domSelector.lastElementChild;
	let newLi = document.createElement('LI');
	newLi.setAttribute('class', `createdLi`);
	lastChild.appendChild(newLi);
}

/// makes the blue box disappear from the now-populated UL element
function boxDisappear (domSelector) {
	let lastChild = domSelector.lastElementChild;
	while (lastChild.hasChildNodes()) {
		lastChild.removeChild(lastChild.firstChild);
	}
}

/// listens for mouseover of the a tag with class mainMenu button and runs boxAppear()
mainNav.addEventListener('mouseover', () => {
	if (event.target === mainMenuButton[0]) {
		return boxAppear(firstMainNav);
	} else if (event.target === mainMenuButton[1]) {
		return boxAppear(webMainNav);
	} else if (event.target === mainMenuButton[2]) {
		return boxAppear(aboutMainNav);
	} else if (event.target === mainMenuButton[3]) {
		return boxAppear(thanksMainNav);
	}
});







