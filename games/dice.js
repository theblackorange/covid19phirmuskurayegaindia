function diceFunc() {

	document.getElementById("anotherChance").innerHTML="";
	var first= document.getElementById("dice1");
	var second= document.getElementById("dice2");

	var forDice1= (Math.floor(Math.random()*6));
	var forDice2= (Math.floor(Math.random()*6));

	switch(forDice1){
		case 1: first.src="dice1.jpg"; break;
		case 2: first.src="dice2.jpg"; break;
		case 3: first.src="dice3.jpg"; break;
		case 4: first.src="dice4.jpg"; break;
		case 5: first.src="dice5.jpg"; break;
		default: first.src="dice6.jpg"; break;
	}

	switch(forDice2){
		case 1: second.src="dice1.jpg"; break;
		case 2: second.src="dice2.jpg"; break;
		case 3: second.src="dice3.jpg"; break;
		case 4: second.src="dice4.jpg"; break;
		case 5: second.src="dice5.jpg"; break;
		default: second.src="dice6.jpg"; break;
	}

	if(forDice1===forDice2){
		document.getElementById("anotherChance").innerHTML="Congratulations!! you get another change";	
	}
	

}