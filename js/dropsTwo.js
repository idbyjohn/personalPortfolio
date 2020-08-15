alert("This is a sample of one particular module activity/assessment.  Some functionality (like the advanced organizer at the top) will not run. To get correct answers on the select-multiple graphic, click on the living room, both bedrooms, and the dining room.  When you click all the correct items and hit the submit button, the program will end and YOU WILL NEED TO EXIT OUT OF THE MODULE WINDOW TO RETURN TO THE PORTFOLIO.  Thanks!!!!");


//for content and reading layout changes in the dom
const layoutWrapper = document.getElementById('layoutWrapper');
const dropActivityIntroVideo = document.getElementById('dropActivityIntroVideo');
const dropAssessmentContainerDiv = document.getElementById('dropAssessmentContainerDiv');
let readingPane = document.getElementById('readingPane');


//for navigation button changes in the dom.
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton')
const backButton = document.getElementById('backButton');


//Sets initial value of the reading pane.  Will change with user events.
readingPane.innerHTML = `<p><strong>Please watch the introduction in the video above.  When finished click the "NEXT" button below.</strong></p>`;

nextButton.addEventListener('click', () => {

	const dropActivityIntroVideo = document.getElementById('dropActivityIntroVideo');


	//This removes the video, and makes the back button and submit button visible.
	layoutWrapper.removeChild(dropActivityIntroVideo);
	backButton.style.display = 'flex';
	nextButton.style.display = 'none';
	submitButton.style.display = 'flex';
	

	//This creates a the dropAssessmentContainerDiv and appends it to the layoutWrapper.
	let newContent = document.createElement('DIV');
	newContent.setAttribute('id', 'dropAssessmentContainerDiv');
	newContent.innerHTML = `<div id="dropOne" class="drop">Drop 1</div>
							<div id="dropOneTarget" class="dropTarget"></div>
							<div id="dropTwo" class="drop">Drop 2</div>
							<div id="dropTwoTarget" class="dropTarget"></div>
							<div id="dropThree" class="drop">Drop 3</div>
							<div id="dropThreeTarget" class="dropTarget"></div>
							<div id="dropFour" class="drop">Drop 4</div>
							<div id="dropFourTarget" class="dropTarget"></div>
							<img id="apartmentPic" src="http://instructionaldesignbyjohn.com/img/aptLayout.jpg">`;
	layoutWrapper.appendChild(newContent);

	//This changes the readingPane's HTML.
	readingPane.innerHTML = `<div id="feedbackDiv">
								
							</div>
							<div id="instructionsDiv">
								<p><strong>Click the areas on the layout where large drops should go.  Hit the 'SUBMIT' button below when finished.</strong></</p>
							</div>
							`;

	//These event listeners listen for user clicks on the target areas and add the drop overlays when clicked.	Also adds text to feedbackDiv, and then removes it after one second.

	let feedbackDiv = document.getElementById('feedbackDiv');

	const dropOneTarget = document.getElementById('dropOneTarget');
	const dropOne = document.getElementById('dropOne');
	dropOneTarget.addEventListener('click', () => {
		dropOne.style.display = 'flex';
		feedbackDiv.innerHTML = `<p><span class= 'correct'>Correct!</span></p>`
		setTimeout( () => {
			feedbackDiv.innerHTML = "";
		}, 1200); 
	});

	const dropTwoTarget = document.getElementById('dropTwoTarget');
	const dropTwo = document.getElementById('dropTwo');
	dropTwoTarget.addEventListener('click', () => {
		dropTwo.style.display = 'flex';
		feedbackDiv.innerHTML = `<p><span class= 'correct'>Correct!</span></p>`
		setTimeout( () => {
			feedbackDiv.innerHTML = "";
		}, 1200); 
	});

	const dropThreeTarget = document.getElementById('dropThreeTarget');
	const dropThree = document.getElementById('dropThree');
	dropThreeTarget.addEventListener('click', () => {
		dropThree.style.display = 'flex';
		feedbackDiv.innerHTML = `<p><span class= 'correct'>Correct!</span></p>`
		setTimeout( () => {
			feedbackDiv.innerHTML = "";
		}, 1200); 
	});

	const dropFourTarget = document.getElementById('dropFourTarget');
	const dropFour = document.getElementById('dropFour');
	dropFourTarget.addEventListener('click', () => {
		dropFour.style.display = 'flex';
		feedbackDiv.innerHTML = `<p><span class= 'correct'>Correct!</span></p>`
		setTimeout( () => {
			feedbackDiv.innerHTML = "";
		}, 1200); 
	});

	const dropAssessmentContainerDiv = document.getElementById('dropAssessmentContainerDiv');
	dropAssessmentContainerDiv.addEventListener('click', (event) => {
		if (event.target !== dropOneTarget && event.target !== dropTwoTarget && event.target !== dropThreeTarget && event.target !== dropFourTarget && event.target !== dropOne && event.target !== dropTwo && event.target !== dropThree && event.target !== dropFour) {
			feedbackDiv.innerHTML = `<p><span class= 'incorrect'>Incorrect.</span></p>
									<p><span class= 'incorrect'>Hint: Place large drops only in big areas.</span></p>`;
			setTimeout( () => {
				feedbackDiv.innerHTML = "";
			}, 1200); 
		}
	});

	submitButton.addEventListener('click', () => {
		if (dropOne.style.display === 'flex' && dropTwo.style.display === 'flex' && dropThree.style.display === 'flex' && dropFour.style.display === 'flex') {
			feedbackDiv.innerHTML = `<p><span class= 'correct'>Correct!</span></p>
									<p><span class= 'correct'>Good Job! You have completed the activity!!!</span></p>`;
		} else {
			feedbackDiv.innerHTML = `<p><span class= 'incorrect'>Incorrect.</span></p>
									<p><span class= 'incorrect'>There are still a few missing drop cloths. Try again.</span></p>`;
			setTimeout(()=>{
				feedbackDiv.innerHTML = "";
			}, 1200);
		}
	});
});





backButton.addEventListener('click', () => {

	//This gets dropAssessmentContainerDiv
	const dropAssessmentContainerDiv = document.getElementById('dropAssessmentContainerDiv');

	backButton.style.display = 'none';
	submitButton.style.display = 'none';
	nextButton.style.display = 'flex';

	//This removes the dropAssessmentContainer Div and appends video to LayoutWrapper.
	layoutWrapper.removeChild(dropAssessmentContainerDiv);
	let newVideo = document.createElement('VIDEO');
	newVideo.setAttribute('id', 'dropActivityIntroVideo');
	newVideo.setAttribute('controls', '');
	newVideo.innerHTML = `<source src="http://instructionaldesignbyjohn.com/img/tapvideo.mp4" type="video/mp4">`
	layoutWrapper.appendChild(newVideo);

	readingPane.innerHTML = `<p><strong>Please watch the introduction in the video above.  When finished click the "NEXT" button below.</strong></p>`;
});




