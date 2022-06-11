const board = document.querySelector('#board');

const colors = ['#0093E9', '#C850C0', '#80D0C7', '#FFFB7D', '#FC00FF', '#FF2525', '#FF6A88'];

const SQUARES_NUMBER = 397;

for ( let i = 0; i < SQUARES_NUMBER; i++ ) {

  const square = document.createElement ('div');

  square.classList.add ('square');

  // square.addEventListener ('mouseover', () => setColor(square)); v1

  // square.addEventListener ('mouseleave', () => removeColor(square)); v1

  square.addEventListener ('mouseover', setColor); //  v2

  square.addEventListener ('mouseleave', removeColor); // v2

  board.append (square);

}

/* v1

function setColor (element) {

  const color = getRandomColor ();

  element.style.backgroundColor = color;

  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

}

function removeColor (element) {

  element.style.backgroundColor = '#1d1d1d';

  element.style.boxShadow = `0 0 2px #000`;


}

*/

// v2

function setColor (event) {

  const element = event.target;

  const color = getRandomColor ();

  element.style.backgroundColor = color;

  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

}

function removeColor (event) {

  const element = event.target;

  element.style.backgroundColor = '#1d1d1d';

  element.style.boxShadow = `0 0 2px #000`;


}




/*

// v1
function getRandomColor () {

  const index = Math.floor (Math.random () * colors.length);

  return colors[index];

}
*/

// v2

function getRandomColor () {

  return colors[Math.floor (Math.random () * colors.length)];

}