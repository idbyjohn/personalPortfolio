// Selects the main nav nav tag.
let mainNav = document.getElementById('mainNav');

// Selects all of the main menu buttons by class.
const mainExpanderMenu = document.getElementsByClassName('mainExpanderMenu');


// DOM selection of parent LI elements and Objects to Build LI elements off of open UL element listed below..
const homeMainNav = document.getElementById('homeMainNav');

const firstMainNav = document.getElementById('firstMainNav');
const firstMainNavBuilder = [ {href: "http://instructionaldesignbyjohn.com/secondaryPages/id.html", text: "TAP Basic Setup", class:"liFirstMainNav"},
							 {href: "http://instructionaldesignbyjohn.com/secondaryPages/id.html#homeBrew", text: "Brewing Beer at Home", class:"liFirstMainNav"} ];

const webMainNav = document.getElementById('webMainNav');
const webMainNavBuilder = [ {href: "http://instructionaldesignbyjohn.com/secondaryPages/web.html#myPortfolio", text: "Personal Portfolio", class: "liWebMainNav"},
							{href: "http://instructionaldesignbyjohn.com/secondaryPages/web.html", text: "Buck Bald Brewing", class: "liWebMainNav"} ];

const aboutMainNav = document.getElementById('aboutMainNav');
const aboutMainNavBuilder = [ {href: "#", text: "About Me", class: "liAboutNav"}, 
							{href: "C:/Users/keena/Desktop/newPortfolio/resume.docx", text: "Download Resume", class: "liAboutNav"}];

const thanksMainNav = document.getElementById('thanksMainNav');

//Selects the open UL tag that is the first child of the main LI's listed above.
const openUL = document.getElementsByClassName('openUL')

///Selects the classnames of the newly created LI tags.
const liFirstMainNav = document.getElementsByClassName('liFirstMainNav');
const liWebMainNav = document.getElementsByClassName('liWebMainNav');
const liAboutNav = document.getElementsByClassName('liAboutNav');




/// selects the id of the LI that we are targeting (through domSelector argument). Selects the last child of that LI (which is an empty UL that we will build on.)
/// creates new li element off of the empty UL.  Li attributes include text, class, and href. Loops through object (forEach) and repeats the process.
function boxAppear (domSelector, objectSelector) {
	objectSelector.forEach( (arg) => {
		let lastChild = domSelector.lastElementChild;
		let newLi = document.createElement('LI');
		newLi.innerHTML = `<a href= "${arg.href}" class="${arg.class}">${arg.text}</a>`;
		lastChild.appendChild(newLi);
	});
}

/// loops through and removes all of the li elements until lastChild.hasChildNodes() evaluates to false
function boxDisappear (domSelector) {
	let lastChild = domSelector.lastElementChild;
	while (lastChild.hasChildNodes()) {
		lastChild.removeChild(lastChild.firstChild);
	}
}

/// listens for mouseover of the a tag with class mainExpanderMenu button and runs boxAppear() for target, and boxDisappear() for all others.  Also checks to see if the 
/// newly created li is on the DOM using the contains() method.  This ensures that no more than one copy is created on the DOM when you roll over the mainExpanderMenu button
mainNav.addEventListener('mouseover', () => {
	if (event.target === mainExpanderMenu[0]) {
		boxDisappear(firstMainNav);
		boxDisappear(webMainNav);
		boxDisappear(aboutMainNav);
	} else if (event.target === mainExpanderMenu[1]  && openUL[0].contains(liFirstMainNav[0]) !== true) {
		boxAppear(firstMainNav, firstMainNavBuilder);
		boxDisappear(webMainNav);
		boxDisappear(aboutMainNav);
	} else if (event.target === mainExpanderMenu[2] && openUL[1].contains(liWebMainNav[0]) !== true) {
		boxAppear(webMainNav, webMainNavBuilder);
		boxDisappear(firstMainNav); 
		boxDisappear(aboutMainNav);
	} else if (event.target === mainExpanderMenu[3] && openUL[2].contains(liAboutNav[0]) !== true) {
		boxAppear(aboutMainNav, aboutMainNavBuilder);
		boxDisappear(webMainNav);
		boxDisappear(firstMainNav);
	} else if (event.target === mainExpanderMenu[4]) {
		boxDisappear(webMainNav);
		boxDisappear(aboutMainNav);
		boxDisappear(firstMainNav);
	}
});


mainNav.addEventListener('mouseleave', () => {
	if (event.target !== mainExpanderMenu[1]) {
		boxDisappear(firstMainNav);
	}
});

mainNav.addEventListener('mouseleave', () => {
	if (event.target !== mainExpanderMenu[2]) {
		boxDisappear(webMainNav);
	}
});

mainNav.addEventListener('mouseleave', () => {
	if (event.target !== mainExpanderMenu[3]) {
		boxDisappear(aboutMainNav);
	}
});




//You will need to set the affected button to display: none

