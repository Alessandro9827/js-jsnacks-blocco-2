//Crea una funzione che accetta due elementi del dom, uno e' il parent e l'altro e' un elemento 
//che voglio sia aggiunto al parent come figlio.

function customAppend (parent, child) {
    const newElement = document.createElement(child); 
    parent.append(newElement);
}

const wrapper = document.getElementById("wrapper");
customAppend(wrapper, "h1");