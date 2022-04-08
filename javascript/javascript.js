document.write("<div>Elemente create din JavaScript! 1</div>");
document.write("<div>Elemente create din JavaScript! 2</div>");
document.write("<div>Elemente create din JavaScript! 3</div>");
document.write("<div>Elemente create din JavaScript! 4</div>");
document.write("<div>Elemente create din JavaScript! 5</div>");

var primul = document.getElementById("primul");
var al_doilea = document.getElementById("al_doilea");
var al_treilea = document.getElementById("al_treilea");
var buton = document.getElementById("buton");

primul.style.fontSize = "3em";

primul.addEventListener("click", () => {
  if (al_doilea.style.color === "red") {
    al_doilea.style.color = "blue";
  } else {
    al_doilea.style.color = "red";
  }
});

al_treilea.addEventListener("click", () => {
  if (al_doilea.style.fontWeight === "bold") {
    al_doilea.style.fontWeight = "normal";
    al_doilea.style.fontStyle = "italic";
  } else {
    al_doilea.style.fontWeight = "bold";
    al_doilea.style.fontStyle = "normal";
  }
});

buton.addEventListener("click", () => {
  let container = document.createElement("div");
  primul.appendChild(container);
});
