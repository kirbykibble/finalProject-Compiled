$(document).ready(function() {
	console.log("ready");
	
	windowPos = document.getElementById("display");
	
	h2 = document.getElementById("header2");
	d2 = document.getElementById("description2");
	option2y = document.getElementById("option2Y");
	option2n = document.getElementById("option2N");
	
	h3 = document.getElementById("header3");
	d3 = document.getElementById("description3");
	option3y = document.getElementById("option3Y");
	option3n = document.getElementById("option3N");
	
	h4 = document.getElementById("header4");
	d4 = document.getElementById("description4");
	
	h5 = document.getElementById("header5");
	d5 = document.getElementById("description5");
	
	watch = null;
	opt2 = null;
	curpage = 0;
});
function page0() {
	windowPos.style.marginTop = "0";
}
function page1() {
	windowPos.style.marginTop = "-100vh";
}
function page2() {
	windowPos.style.marginTop = "-200vh";
}
function page3() {
	windowPos.style.marginTop = "-300vh";
}
function page4() {
	windowPos.style.marginTop = "-400vh";
}
function opt1_WatchY() {
	h2.innerHTML = "You have the Alcowatch";
	d2.innerHTML = "With the night over, you decide that it is time to head home. You choose to:";
	option2y.innerHTML = "Call your Friends";
	option2n.innerHTML = "Walk Home";
}
function opt1_WatchN() {
	h2.innerHTML = "You have your regular watch";
	d2.innerHTML = "With the night over, you decide that it is time to head home. You choose to:";
	option2y.innerHTML = "Call your Friends";
	option2n.innerHTML = "Walk Home";
}
function opt2_WatchY_friends() {
	h4.innerHTML = "You call your friends";
	d4.innerHTML = "Due to the lateness of the evening, none of your friends respond. However, the alcowatch calls a cab for you as a last resort.";
}
function opt2_WatchY_walk() {
	h4.innerHTML = "You walk home";
	d4.innerHTML = "As you leave, the Alcowatch realises that you are trying to leave, and immediately begins calling your friends. To no avail, the Alcowatch sends the nearest cab your location.";
}
function opt2_WatchN_walk() {
	h4.innerHTML = "You walk home";
	d4.innerHTML = "As you leave, you immediately get very disoriented and lost. You black out.";
}
function opt2_WatchN_friends() {
	h3.innerHTML = "You call your friends";
	d3.innerHTML = "Due to the lateness of the evening, none of your friends respond and you are too tired to make more than 3 calls. Rather, you decide to:";
	
	option3y.innerHTML = "Drive Home";
	option3n.innerHTML = "Walk Home";
}
function drive() {
	h4.innerHTML = "You drive.";
	d4.innerHTML = "You thought you could handle the driving. Five minutes in, you hear a loud horn and and then nothing.";
}
function watchYes() {
	watch = true;
	console.log(watch);
	page1();
	opt1_WatchY();
}
function watchNo() {
	watch = false;
	console.log(watch);
	page1();
	opt1_WatchN();
}
// Call your friends
function option2G() {
	if (watch === true) {
		//good ending
		page3();
		opt2_WatchY_friends();
		ending = 1;
	}
	else if (watch === false) {
		console.log("yes");
		page2();
		opt2_WatchN_friends();
	}
}
function option2B() {
	if (watch === true) {
		page3();
		opt2_WatchY_walk();
		ending = 1;
	}
	else if (watch === false) {
		page3();
		opt2_WatchN_walk();
		ending = 2;
	}
}
function option3B() {
	page3();
	opt2_WatchN_walk();
	ending = 2;
}
function option3G() {
	page3();
	drive();
	ending = 3;
}
function continueEnd() {
	page4();
	if (ending === 1) {
		h5.innerHTML = "You get home";
		d5.innerHTML = "You arrive home safely, the Alcowatch marks you as safe, and you and your friends sleep easy.";
	}
	else if (ending === 2) {
		h5.innerHTML = "You blacked out";
		d5.innerHTML = "You awake at 11 in the morning to find yourself in an alley. Your wallet, phone and car keys have been stolen";
	}
	else if (ending === 3) {
		h5.innerHTML = "You crashed";
		d5.innerHTML = "You crashed into another car. The other driver is hospitalised with serious injuries while you die on impact.";
	}
}
function end() {
	window.location.href = 'http://i3.kym-cdn.com/photos/images/original/000/799/689/749.gif';
}
function retry() {
//	location.reload();
	page0();
}