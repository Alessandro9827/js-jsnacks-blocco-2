//Chiedo all'utente un numero e genero attraverso una funzione un numero di quadrati equivalente 
//al numero inserito dall'utente nel DOM, in qualsiasi forma. 


let userNumber = parseInt(prompt('inserisci un numero'));

function generateSquare () {
    let newSquareElement = document.createElement('article');
    newSquareElement.classList.add('item-square');
    return newSquareElement;
}

const bodyContentElement = document.querySelector('body.section.main-content');



for (let i = 0; i < userNumber; i++){
   
    bodyContentElement.appendChild(generateSquare());
}
