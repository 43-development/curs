var prima_functie = (a, b) => {
  return a * b;
};

var a_doua_functie = (a, b, c) => {
  return a + b - c;
};

var a_treia_functie = (a, b) => {
  return a + b - prima_functie(a, b);
};

console.log(a_treia_functie(7, 1));
console.log(a_treia_functie(14, 6));
