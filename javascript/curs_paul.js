(function() {})();
 //functia care e definita si apelata in acelasi timp
 //de exemplu: 
 (function (a,b){return a+b})(5,7) //  iar ceea ce va aparea va fi 12.

 function ceva() {}; // cea mai usor de inteles formula a functiei
ceva()

var altceva = function () {};
altceva();

() => {}; //lambda

((a, b) => { return a + b })(5, 7);

var altfel = () => {}; //variabila cu lambda
altfel();

//------------------------
(a, b) => a + b; //este folosita doar cand are o singura informaatie in RETURN


// exercitii

var unu = (a, b) => a * b;

var doi = (a, b, c) => a + b - c

function trei (a, b) 
{
    var unu = unu(a, b);
    var doi = doi (a, b, unu)
    return doi 
    //sau 
} 