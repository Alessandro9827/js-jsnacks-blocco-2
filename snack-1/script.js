//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
//Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const array = [];
let somma = 0;

while ( somma < 50 ) {

    const userNumber = parseInt(prompt('inserisci un numero'));
    
    if ( !isNaN(userNumber) ) {
        somma += userNumber;
        array.push(userNumber);
    }
  }

  console.log(array, somma);
  
