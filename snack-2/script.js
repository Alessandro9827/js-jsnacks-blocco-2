//Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi,
//e da queste vuole generare una falsa lista di invitati con nome e cognome.

const nameList = ["Alessandro", "Marco", "Lucia","Martina", "Andea"];
const surnameList = ["Menichi", "Frigatti", "Massasogni", "Piccoli", "Bobbio"];

const invitedList = [];
const numberOfRandomNames = 10;
//let surnameFakeList = surnameList[Math.floor(Math.random() * surnameList.length)];
//let nameFakeList = nameList[Math.floor(Math.random() * nameList.length)];

//invitedList.push(surnameFakeList + " " + nameFakeList);

while ( invitedList.length < numberOfRandomNames ){
    // Prendo il primo elemento dal primo array
    let surnameFakeList = surnameList[Math.floor(Math.random() * surnameList.length)];

    // Prendo il secondo elemento del secondo array
    let nameFakeList = nameList[Math.floor(Math.random() * nameList.length)];

    // Genero il nome cognome casuale
    let completeNameGen = surnameFakeList + ' ' + nameFakeList;

    // % inseriemo completeNameGen in questo array
    invitedList.push(completeNameGen); 
}

console.log(invitedList);