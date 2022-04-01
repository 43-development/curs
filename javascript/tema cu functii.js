
// prima incercare

var functia1CareEProdusulArgumentelor = function  (argument1, argument2)  
    {
        return "produsul argumentelor este " + argument1 * argument2
    }

functia1CareEProdusulArgumentelor(10,11)

var functia2AdunareSiScadere = function (termen1, termen2, scazator) 
    {
        return "a = 5 , b = 6, c = 7, d= a+b - c. d=? " + termen1 + termen2 - scazator
    }

functia2AdunareSiScadere (5,6,7)

var functia3 = function (arg1, arg2) 
    {
        var u = functia1CareEProdusulArgumentelor(arg1,arg2) 
        var d = functia2AdunareSiScadere (arg1, arg2, u)    
        return  d
    }
 var rezultat_complicat= functia3(7,1)
 var rezultat_complicat2 = functia3(14,6)
 var rezultat_complicat3 = functia3(10,5)

// a doua incercare

function functia1CareEProdusulArgumentelor(argument1,argument2) 
    {
        return  argument1 * argument2;   
    }

functia1CareEProdusulArgumentelor(10,11)

function functia2AdunareSiScadere(a, b, c)
    {
        return  "rezultatul este" + a+b-c
    }
functia2AdunareSiScadere(5, 6, 7)

function functia3complicata(m, n)
    {   
       
        return functia2AdunareSiScadere(m,n, functia1CareEProdusulArgumentelor(m,n))
    }

var primul_rezultat= functia3complicata(7,1)
var al_doilea_rezultat= functia3complicata(14,6)
var rezultatul_numerelor_alese_de_mine = functia3complicata(10,5)

//sau incercarea cu console.log 

console.log("Prima incercare este" + functia3complicata(7,1))
console.log("a doua incercare este" + functia3complicata (14,6))
console.log("ultima incercare este" + functia3complicata (10,5))

// dă, Doamne, să fie bine

