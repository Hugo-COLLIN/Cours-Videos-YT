console.log(document);

//Get Element(s)
var id = document.getElementById("Hello");
console.log(id);

var cl = document.getElementsByClassName("World");
console.log(cl);

var tag = document.getElementsByTagName("div");
console.log(tag);

//Query Selector, meilleur compatibilité, utilise les éléments CSS, identique aux getElement(s)
var qsid = document.querySelector("#Hello");
console.log(qsid);

var qscl = document.querySelector("div");
console.log(qscl);

var qstag = document.querySelector(".World");
console.log(qstag);


//Ajout texte dans éléments HTML
qsid.innerHTML = "Hey salut !";

//Dans la console :
//qsid.className
//qsid.className = "Zut"

//qsid.innerHTML = "REmplacement subtil"
// qsid.classList.add("red")
// qsid.classList
// qsid.classList.remove('red')
// qsid.classList

//Sélection du style
var p = document.querySelector("#parag");
p.style.color = "red";