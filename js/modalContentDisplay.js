

//aboutMainNav, thanksMainNav and liAboutNav were both declared in mainMenu.js

const modalBacksplash = document.getElementById('modalBacksplash');
const linkItem = document.getElementsByClassName('linkItem');
const aboutContent = document.getElementById('aboutContent');
const thanksContent = document.getElementById('thanksContent');
const closeButton = document.getElementById('closeButton');

//Adds div with all HTML needed to build the aboutContent Div and all its children.
function addRemoveAboutDiv () {
	if (event.target !== liAboutNav[1] && modalBacksplash.contains(aboutContent) !== true) {
		modalBacksplash.style.display = "flex";
		let newAboutDiv = document.createElement('DIV');
		newAboutDiv.setAttribute('id', 'aboutContent');
		newAboutDiv.innerHTML = `
								<img class="secondPic" src="http://instructionaldesignbyjohn.com/img/secondPic.jpg" alt="profile picture">
								<div>
									<h1>Hi, I'm John!</h1>
									<p>So… a little bit about myself!  I have always been drawn to helping others find their “lightbulb moments” – the point in learning where all the pieces of instruction fall into place to result in skill or concept acquisition.</p>
									<p>I take a special interest in blending instructional methods with technology to provide e-learning solutions that improve accessibility for the adult learner.  In these challenging times, I believe thoughtfully produced e-learning platforms can provide unique learning experiences for those looking to upgrade their skillset.</p>
									<p>Thank you for visiting my portfolio! If you would like to download my resume, simply click the link below!</p>
									<p>Cheers!</p>
									<p>John Keenan</p>
								</div>
								<a class="modalLink" href="http://instructionaldesignbyjohn.com/resume.docx">Download Resume</a>
								<div id="closeButton"><img class= "closeButton" src="http://instructionaldesignbyjohn.com/img/circleXIcon.png" alt="close icon"></div>
								<div id="closeContent">Exit Page</div>
								`
		modalBacksplash.appendChild(newAboutDiv);

		//Closes the modal box
		const closeButton = document.getElementById('closeButton');
		
		closeButton.addEventListener('click', ()=>{
			const aboutContent = document.getElementById('aboutContent');
			modalBacksplash.style.display = "none";
			modalBacksplash.removeChild(aboutContent);
		});

		const closeContent = document.getElementById('closeContent');

		closeContent.addEventListener('click', () => {
			const aboutContent = document.getElementById('aboutContent');
			modalBacksplash.style.display = "none";
			modalBacksplash.removeChild(aboutContent);
		});
	}
	// const closeButton = document.getElementById('closeButton');
	// closeButton.addEventListener('click', ()=>{
	// 	const aboutContent = document.getElementById('aboutContent');
	// 	modalBacksplash.style.display = "";
	// 	modalBacksplash.removeChild(aboutContent);
	// });
}

function addRemoveThanksDiv() {
	modalBacksplash.style.display = 'flex'
	let newThanksDiv = document.createElement('DIV');
	newThanksDiv.innerHTML = `
							<h1>Thank you!</h1>
							<p>A special thanks to Don Keenan and Patrick Keenan who have given so much.  I cannot hope to repay your generous gifts of time and patience.</p>
							<p>Thank you to my parents, Lesley and Pat, and the rest of the Keenan family.  You bring joy to my life in so many ways.</p>
							<p>Thank you to all the colleagues, coworkers, bosses, and mentors I have known throughout the years.  You have provided much needed guidance and support.</p>
							<p>And most of all, thank you to my loving wife Christianna who encourages me every day to be the best person that I can be.</p>
							<p>And, of course, Henry!  You’re Daddy’s good boy! </p>

							<div id="closeButton"><img class= "closeButton" src="http://instructionaldesignbyjohn.com/img/circleXIcon.png" alt="close icon"></div>
							<div id="closeContent">Exit Page</div>
							`	
	newThanksDiv.setAttribute('id', 'thanksContent');
	modalBacksplash.appendChild(newThanksDiv);

	//closes the box
	const closeButton = document.getElementById('closeButton');
	closeButton.addEventListener('click', ()=>{
		const thanksContent = document.getElementById('thanksContent');
		modalBacksplash.style.display = "none";
		modalBacksplash.removeChild(thanksContent);
	});

	const closeContent = document.getElementById('closeContent');

		closeContent.addEventListener('click', () => {
			const thanksContent = document.getElementById('thanksContent');
			modalBacksplash.style.display = "none";
			modalBacksplash.removeChild(thanksContent);
		});
}



//listens for clicks on the the main nav button and its first child in large screens.  Displays modalBacksplash and inserts the div.
//listens for clicks on the closeButton div and closes the modalBacksplash and all its children when clicked.  
aboutMainNav.addEventListener('click', (event) => {
	addRemoveAboutDiv();
});

//selects the third item in the sandwich menu and adds event listener.  "Closes" the expanded menu and generates the modalBacksplash
//all it's children
linkItem[2].addEventListener('click', ()=>{
	expandedMenu.style.display = 'none';
	expandedMenuLander.style.display = 'none';
	addRemoveAboutDiv();
});


//listen for clicks on the main nav button and its second child in large screens. Displays modalBacksplash and inserts the div.
//listens for clidks on the closeButton div and closes the modalBacksplash and all its children.
thanksMainNav.addEventListener('click', () => {
	addRemoveThanksDiv();
});

//selects the third item in the sandwich menu and adds event listener.  "Closes" the expanded menu and generates the modalBacksplash
//all it's children
linkItem[3].addEventListener('click', () => {
	expandedMenu.style.display = 'none';
	expandedMenuLander.style.display = 'none';
	addRemoveThanksDiv();
});

