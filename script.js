let myName;

function namey() {
	myName = prompt("Hiya, what is your name?");
	alert("Hi there " + myName + "👋");
	console.log("This person's name is " + myName + ".");
}

let Animal;

function animal() {
	Animal = prompt("What is your spirit animal?");
	alert(
		"Wow, a " + Animal + ", that tells me a lot about you " + myName + "🐾"
	);
	console.log("Their spirit animal is a " + Animal + ".");
}

let Breakfast;

function breakfast() {
	Breakfast = prompt("And tell me, what did you have for breakfast today?");
	alert(
		"Yum, " +
			Breakfast +
			" sounds like a good breakfast for a " +
			Animal +
			" called " +
			myName +
			"!😋"
	);
	console.log("They had " + Breakfast + " for breakfast.");
}

function age() {
	let Age = prompt("And finally, how old are you?");
	alert(
		"Oh yes, " +
			Age +
			" year old " +
			Animal +
			"s" +
			" called " +
			myName +
			" deserve " +
			Breakfast +
			" for breakfast!😋"
	);
	console.log("And finally, they are " + Age + " years old.");
}
