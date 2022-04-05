// document.write("<div>Elemente create din JavaScript! 1</div>");
// document.write("<div>Elemente create din JavaScript! 2</div>");
// document.write("<div>Elemente create din JavaScript! 3</div>");
// document.write("<div>Elemente create din JavaScript! 4</div>");
// document.write("<div>Elemente create din JavaScript! 5</div>");

var primul = document.getElementById("primul");
var al_doilea = document.getElementById("al_doilea");
var al_treilea = document.getElementById("al_treilea");

primul.style.fontSize = "3em";

primul.addEventListener("click", toggle);

function toggle() {
  al_doilea.style.color = al_doilea.style.color === "red" ? "blue" : "red";
}

al_treilea.addEventListener("click", () => {
  if (al_doilea.style.fontStyle === "italic") {
    al_doilea.style.fontStyle = "normal";
    al_doilea.style.fontWeight = "bold";
  } else {
    al_doilea.style.fontStyle = "italic";
    al_doilea.style.fontWeight = "normal";
  }
});

var butonul_meu = document.getElementById("btn");

butonul_meu.addEventListener("click", () => {
  var element_nou = document.createElement("div");
  element_nou.setAttribute("id", "div1");

  var continut_element = document.createTextNode("Eu sunt noul element creat!");
  element_nou.appendChild(continut_element);
  document.body.appendChild(element_nou);

  var noul_element = document.getElementById("div1");
  noul_element.addEventListener("click", () => {
    noul_element.remove();
  });
});
