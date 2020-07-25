let notFinished = document.querySelector('.fileDownloadsWrapper');

notFinished.addEventListener('click', (event)=>{
	if(event.target.className === 'notDone') {
		alert('Greetings! This assignment is not yet available.  Please check back after the due date to read the file.  Thank you!');
	}
});



