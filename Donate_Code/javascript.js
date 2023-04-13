var endDate = '15/04/2023'

function getCurentDate() {
	var today = new Date();
	var dd= String(today.getDate()).padStart(2,'0');
	var mm= String(today.getMonth()+1).padStart(2,'0'); 
	var yyyy = today.getFullYear();

	today = dd + '/' + mm + '/' + yyyy;
	return today;
}

function dateDifference() {
	splitDateEndList = endDate.split('/');
	splitDateCurrentList = getCurentDate().split('/');
	daysLeft = (splitDateEndList[2]-splitDateCurrentList[2])*365 + (splitDateEndList[1]-splitDateCurrentList[1])*31 + splitDateEndList[0] - splitDateCurrentList[0]
	return daysLeft
}

function changeDate() {
	var text;
	text = "Only " + dateDifference() + " days left";

	document.getElementById('time-remaining-text').textContent = text;
}
changeDate();


function addDonators() {
	element = document.getElementById('text-number-participants');
	element.textContent = parseInt(element.textContent) + 1;
}

function addMoney() {
	bar = document.getElementById('fill-progress-bar');
	percent = parseInt(bar.offsetWidth);
	console.log(percent);
}

addMoney();