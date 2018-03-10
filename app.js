var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6 ) + 1;															// Random Dice Number Generate
//console.log(dice);

document.querySelector ('#current-' + activePlayer).textContent = dice;								// setter - sets a value
//document.querySelector ('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

/*
var x = document.querySelector('#score-0').textContent;												// getter - gets a value
console.log(x);																						// just an example
*/


document.querySelector ('.dice').style.display = 'none';											// For not showing the dice picture at the start of the game