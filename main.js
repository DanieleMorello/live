// Array Live 1:
// Chiediamo un numero all'utente e stampiamo l'elemento che si trova nella posizione indicata dall'utente all'interno dell'array.

// STRUMENTI
//  -ARRAY
//  -PROMPT/INPUT
// -CONST/ LET

// Crea un array di elementi e lo salvo in una variabile
const movies = [
  'Titanik',
  'End game',
  'Ace Ventura',
  'Star Wars'
];

// Chiediamo un numero all'utente e stampiamo
// const number = Number(prompt('Inserisci un numero da 0 fino a  ' + (movies.length - 1)));
// console.log('Inserisci un numero da 0 fino a  ' + (movies.length - 1), number);
const numberEl = document.getElementById('number');
// console.log(numberEl.value);

// Selezione il bottone nella DOM
const buttonEL = document.querySelector('button');
// aggiungo un event listener
buttonEL.addEventListener('click', function() {
// recupero il valore in console
// console.log(numberEl.value);

const number = Number(numberEl.value);
// Recupera l'elemento dell'array che rientra nel range
console.log(movies[number]);

// Stampiamo in pagina

// seleziono buttonEL

// inserisco un nuovo elemento dopo la chiusura del bottone
buttonEL.insertAdjacentHTML('afterend', `<p>${movies[number]}</p>`)
});






// console.log(movies[number]);
// console.log(movies.length -1);


