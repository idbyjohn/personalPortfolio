

//aboutMainNav, thanksMainNav and liAboutNav were both declared in mainMenu.js

const modalBacksplash = document.getElementById('modalBacksplash');
const linkItem = document.getElementsByClassName('linkItem');
const aboutContent = document.getElementById('aboutContent');
const thanksContent = document.getElementById('thanksContent');
const closeButton = document.getElementById('closeButton');

//Adds div with all HTML needed to build the aboutContent Div and all its children.
function addAboutDiv () {
	if (event.target !== liAboutNav[1] && modalBacksplash.contains(aboutContent) !== true) {
		modalBacksplash.style.display = "flex";
		let newAboutDiv = document.createElement('DIV');
		newAboutDiv.setAttribute('id', 'aboutContent');
		newAboutDiv.innerHTML = `
								<img class="secondPic" src="img/secondPic.jpg" alt="profile picture">
								<div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. At volutpat diam ut venenatis tellus in metus vulputate. Accumsan lacus vel facilisis volutpat.</p>
									<p>Sem et tortor consequat id. Blandit aliquam etiam erat velit. Lorem mollis aliquam ut porttitor leo a diam sollicitudin.Massa massa ultricies mi quis hendrerit dolor magna eget. Est velit egestas dui id ornare arcu odio.</p>
								</div>
								<a class="modalLink" href="C:/Users/keena/Desktop/newPortfolio/resume.docx">Download Resume</a>
								<div id="closeButton"><img class= "closeButton" src="img/circleXIcon.png" alt="close icon"></div>
								`
		modalBacksplash.appendChild(newAboutDiv);
	}
	const closeButton = document.getElementById('closeButton');
	closeButton.addEventListener('click', ()=>{
		const aboutContent = document.getElementById('aboutContent');
		modalBacksplash.style.display = "";
		modalBacksplash.removeChild(aboutContent);
	});
}

function addThanksDiv() {
	modalBacksplash.style.display = 'flex'
	let newThanksDiv = document.createElement('DIV');
	newThanksDiv.innerHTML = `
							<p>Hello</p>
							<p>World</p>
							<div id="closeButton"><img class= "closeButton" src="img/circleXIcon.png" alt="close icon"></div>
							`	
	newThanksDiv.setAttribute('id', 'thanksContent');
	modalBacksplash.appendChild(newThanksDiv);

	const closeButton = document.getElementById('closeButton');
	closeButton.addEventListener('click', ()=>{
		const thanksContent = document.getElementById('thanksContent');
		modalBacksplash.style.display = "";
		modalBacksplash.removeChild(thanksContent);
	});
}



//listens for clicks on the the main nav button and its first child in large screens.  Displays modalBacksplash and inserts the div.
//listens for clicks on the closeButton div and closes the modalBacksplash and all its children when clicked.  
aboutMainNav.addEventListener('click', (event) => {
	addAboutDiv();
});

//selects the third item in the sandwich menu and adds event listener.  "Closes" the expanded menu and generates the modalBacksplash
//all it's children
linkItem[2].addEventListener('click', ()=>{
	expandedMenu.style.display = 'none';
	expandedMenuLander.style.display = 'none';
	addAboutDiv();
});


//listen for clicks on the main nav button and its second child in large screens. Displays modalBacksplash and inserts the div.
//listens for clidks on the closeButton div and closes the modalBacksplash and all its children.
thanksMainNav.addEventListener('click', () => {
	addThanksDiv();
});

//selects the third item in the sandwich menu and adds event listener.  "Closes" the expanded menu and generates the modalBacksplash
//all it's children
linkItem[3].addEventListener('click', () => {
	expandedMenu.style.display = 'none';
	expandedMenuLander.style.display = 'none';
	addThanksDiv();
});

