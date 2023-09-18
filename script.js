function name() {
	let Name = prompt("Hiya, what is your name?");
	alert("Hi there " + Name + "👋");
	console.log("This person's name is " + Name + ".");
}

function animal() {
	let Name = name();
	let Animal = prompt("What is your spirit animal?");
	alert("Wow, a " + Animal + ", that tells me a lot about you " + Name + "🐾");
	console.log("Their spirit animal is a " + Animal + ".");
}

function breakfast() {
	let Breakfast = prompt("And tell me, what did you have for breakfast today?");
	alert(
		"Yum, " +
			Breakfast +
			" sounds like a good breakfast for a " +
			Animal +
			" called " +
			Name +
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
			Name +
			" deserve " +
			Breakfast +
			" for breakfast!😋"
	);
	console.log("And finally, they are " + Age + " years old.");
}
