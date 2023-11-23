//Cliccando su un pulsante, viene avviato un cronometro. 
//Per fermare il cronometro, bisogna cliccare su un secondo pulsante

const cronometro = document.querySelector('div.cronometro');
const buttonStart = document.getElementById('btn-start');
const buttonStop = document.getElementById('btn-stop');
const output = document.querySelector('div.seconds h2');

let clock;

buttonStart.addEventListener('click', function(){
    clock = setInterval(function() {
        output.innerHTML = parseInt( output.innerText, 10) + 1
    }, 1000);
});

buttonStop.addEventListener('click', function(){
    clearInterval(clock)
})