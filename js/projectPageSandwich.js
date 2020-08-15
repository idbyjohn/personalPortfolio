const mobileTabNav = document.getElementsByClassName('mobileTabNav');
const mobileTabNavButton = document.getElementsByClassName('mobileTabNavButton');
const mobileTabNavExpander = document.getElementsByClassName('mobileTabNavExpander');
const scrollPoint = document.getElementsByClassName('scrollPoint');

mobileTabNav[0].addEventListener('click', () => {
	if(mobileTabNavExpander[0].style.height === '') {
		mobileTabNavExpander[0].style.height = '210px';
	} else {
		mobileTabNavExpander[0].style.height = '';
	}
	
});

// scrollPoint[0].addEventListener('click', () => {
// 	const projectAlignment = document.getElementById('projectAlignment');
// 	projectAlignment.scrollIntoView();
// });


//Use scrollIntoView with the object parameter to smooth scroll the elements to the middle of the page.
