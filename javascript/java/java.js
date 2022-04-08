
console.log("Hello, world!-mesaj din consola");


var primul = document.getElementById("primul");
var al_doilea = document.getElementById("al_doilea");
var al_treilea = document.getElementById("al_treilea");

primul.style.fontSize = "3em";

primul.addEventListener("click", () => {
    if (al_doilea.style.color === "red") {
        al_doilea.style.color = "blue";
    } else {
        al_doilea.style.color = "red";
    }
});

al_treilea.addEventListener('click', () => {
    if (al_doilea.style.fontWeight === 'bold') {
        al_doilea.style.fontWeight = 'normal';
        al_doilea.style.fontStyle = 'italic'
    } else {
        al_doilea.style.fontWeight = 'bold';
        al_doilea.style.fontStyle = 'normal'
    }
})

document.write("<div>Elemente create din JavaScript! 1</div>");
document.write("<div>Elemente create din JavaScript! 2</div>");
document.write("<div>Elemente create din JavaScript! 3</div>");
document.write("<div>Elemente create din JavaScript! 4</div>");
document.write("<div>Elemente create din JavaScript! 5</div>");

// function Butonul(){    
// Butonul.addEventListener("click", () => {
//var NoulButon = document.createElement("Rand Nou");

//NoulButon.after( "Un Rand"); 

// })} - o incercare nereusita

function NoulButon() {
    var Butonul = document.getElementById("primul");
    var divul = document.createElement("div");
    divul.innerHTML = "Un Rand Nou";
   Butonul.after(divul);

    
    divul.addEventListener("click", () => { divul.remove(); });}

    
    


    

