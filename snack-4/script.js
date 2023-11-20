//Crea una funzione che accetta due numeri, se il primo e' divisibile per il secondo, 
//allora ritorna vero, altrimenti ritorna falso.
//Micro bonus: se sono uguali ritorna il numero.

const firstNumber = prompt('inserisci il primo numero');
const secondNumber = prompt('inserisci il secondo numero');

function isDivivisble (firstNumber, secondNumber) {
     if (firstNumber % secondNumber === 0) {
        return true;
    }
    else {
        return false
    }
}
