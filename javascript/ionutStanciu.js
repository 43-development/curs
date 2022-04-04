var primaFunctie = function (numar1, numar2) {
  return numar1 * numar2;
};

var calcul1 = primaFunctie(18, 34);
console.log(calcul1);

var aDouaFunctie = function (numar1, numar2, numar3) {
  return numar1 + numar2 - numar3;
};

var calcul2 = aDouaFunctie(38, 53, 62);
console.log(calcul2);

function aTreiaFunctie(numar1, numar2) {
  var primulArgument = aDouaFunctie(
    numar1,
    numar2,
    primaFunctie(numar1, numar2)
  );
  return primulArgument;
}

var calcul3 = aTreiaFunctie(7, 14);
var calcul3 = aTreiaFunctie(14, 6);
var calcul3 = aTreiaFunctie(10, 11);
console.log(aTreiaFunctie);
