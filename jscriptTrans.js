$(document).ready(function() {
	console.log("ready");
	console.log(document.getElementById("next"));
	curpage = 0;
	
	movement = document.getElementById("middle");
	buttons = document.getElementById("bottom");
	nextBut = document.getElementById("next");
	backBut = document.getElementById("back");
	
	prog1 = document.getElementById("prog1");
	prog2 = document.getElementById("prog2");
	
	arrow1 = document.getElementById("arrow1");
	arrow2 = document.getElementById("arrow2");

	firstName = document.getElementById("firstName");
	lastName = document.getElementById("lastName");
	
	cardNum = document.getElementById("creditNum");
	overviewInfo = document.getElementById("overviewInfo");
	
	shippingBut = document.getElementById("shippingConfirm");
	newShip = document.getElementsByClassName("newShip");
	console.log(newShip);
});


function page1() {
	movement.style.marginLeft = "0";
	buttons.style.marginTop = "-7vw";
	backBut.disabled = true;
	
	prog1.style.backgroundColor = "#ffd8ad";
	prog2.style.backgroundColor = "#ffd8ad";
	arrow1.style.color = "#ffd8ad";
	arrow2.style.color = "#ffd8ad";
	
}
function page2() {
	movement.style.marginLeft = "-101.5vw";
	buttons.style.marginTop = "0";
	backBut.disabled = false;
	nextBut.innerHTML = "Next Step";
	nextBut.setAttribute("onclick", "next()");
	
	prog1.style.backgroundColor = "#ffa834";
	prog2.style.backgroundColor = "#ffd8ad";
	arrow1.style.color = "#ffa834";
	arrow2.style.color = "#ffd8ad";
	
}
function page3() {
	movement.style.marginLeft = "-201.5vw";
	buttons.style.marginTop = "-20vw";
	nextBut.innerHTML = "Confim Order";
	nextBut.setAttribute("onclick", "endPage()");
	
	prog1.style.backgroundColor = "#ffa834";
	prog2.style.backgroundColor = "#ffa834";
	arrow1.style.color = "#ffa834";
	arrow2.style.color = "#ffa834";


	userName = lastName.value + ", " + firstName.value;
	creditNum = cardNum.value.slice(12,16);
	overviewInfo.innerHTML = "Name: " + userName + "<br>Card Ending in: " + creditNum;
	
}

function endPage() {
	window.location.href = "IndexFinal.html";
}

function check() {
	console.log(shippingBut.checked);
	isChecked = shippingBut.checked;
	if (isChecked === true) {
		for (i in newShip) {
			if (document.getElementById(i) != null) {
				document.getElementById(i).disabled = false;
				console.log(document.getElementById(i))
			}
		}
	}
	else if (isChecked === false) {
		for (i in newShip) {
			if (document.getElementById(i) != null) {
				document.getElementById(i).disabled = true;
				console.log(document.getElementById(i))
			}
		}
	}
}

function back() {
	console.log("going back...");
	if (curpage === 2) {
		curpage -= 1;
		console.log(curpage);
		page2()
	}
	else if (curpage === 1) {
		curpage -= 1;
		console.log(curpage);
		page1()
	}
}

function cancel() {
	userConfirm = confirm("Are you sure you want to leave this page?");
	if (userConfirm === true) {
		window.location.href = 'htmlpro(1).html';
	}
}
function finish() {
	window.location.href = "htmlpro(1).html";
}
function next() {
	if (curpage === 0){
		curpage += 1;
		console.log(curpage);
		page2();
	}
	else if (curpage === 1) {
		curpage += 1;
		console.log(curpage);
		page3();
	}	
	else {
		console.log("nothing");
	}
}
