//Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, 
//peso e lunghezza. Calcola quanto pesano tutte le zucchine.

const zucchina = {
    varieta : '',
    peso: 0,
    lunghezza: 0,
  };

const zucchinaNera = Object.create(zucchina);
zucchinaNera.varieta = 'Zucchina nera';
zucchinaNera.peso = 0.5;
zucchinaNera.lunghezza = 25; 

const zucchinoFiorentino = Object.create(zucchina);
zucchinoFiorentino.varieta = 'Zucchino fiorentino';
zucchinoFiorentino.peso = 0.7;
zucchinoFiorentino.lunghezza = 35; 

const zucchinaNapoletana = Object.create(zucchina);
zucchinaNapoletana.varieta = 'Zucchina napoletana';
zucchinaNapoletana.peso = 0.9;
zucchinaNapoletana.lunghezza = 20; 

const zucchinaTonda = Object.create(zucchina);
zucchinaTonda.varieta = 'Zucchine tonde';
zucchinaTonda.peso = 0.4;
zucchinaTonda.lunghezza = 12;


const summZucchine = zucchinaNera.peso + zucchinoFiorentino.peso + zucchinaNapoletana.peso + zucchinaTonda.peso
console.log(summZucchine);