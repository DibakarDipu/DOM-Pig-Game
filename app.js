var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

/*
document.querySelector ('#current-' + activePlayer).textContent = dice;								// setter - sets a value
document.querySelector ('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-0').textContent;												// getter - gets a value
console.log(x);																						// just an example
*/

document.querySelector ('.dice').style.display = 'none';											// For not showing the dice picture at the start of the game

/*
function btn() {
	// Do something
}
btn();

document.querySelector ('.btn-roll').addEventListener ('click', btn);								// Here, 'btn' is a callback function
*/

document.querySelector ('.btn-roll').addEventListener ('click', function() {						// anonymous function - which we can't use outside anywhere except this selector

	// 1. Random Number
	var dice = Math.floor(Math.random() * 6 ) + 1;													// Random Dice Number Generate

	// 2. Display Result
	var diceDOM = document.querySelector ('.dice');
	diceDOM.style.display = 'block';																// For showing the dice picture after the dice rolls
	diceDOM.src = 'dice-' + dice + '.png';

	// 3. Update the Round Score IF the rolled number was NOT a 1


});