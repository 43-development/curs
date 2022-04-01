// Tema 3 functii


console.log ('Start')

var prima_functie = (a, b) => a * b;
console.log ('Rezultatul primei functii este = ' + prima_functie (1, 2));

var a_doua_functie = (a, b, c) => a + b - c;
console.log ('Rezultatul celei de-a doua functii este = ' + a_doua_functie (3, 4, 5));

var a_treia_functie = (a, b) => a_doua_functie(a, b, prima_functie(a, b));

console.log ('Primul rezultat al celei de-a treia functii este = ' + a_treia_functie (7, 1))
console.log ('Al doilea rezultat al celei de-a treia functii este = ' + a_treia_functie (14, 6))
console.log ('Al treile rezultat al celei de-a treia functii este = ' + a_treia_functie (2, 2))

console.log ('Finish')