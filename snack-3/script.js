//Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const firstWord = prompt("inserisci qui la tua prima parola");
const secondWord = prompt("inserisci qui la tua seconda parola");

if (lengthWord (firstWord, secondWord)) {
    console.log(firstWord, secondWord)
}
else if (firstWord.length > secondWord.length){
    console.log(firstWord);
}
else {
    console.log(secondWord);
}

function lengthWord (firstWord, secondWord) {
    if (firstWord.length === secondWord.length) {
        return true;
    }
    else {
        return false;
    }
}