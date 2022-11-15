// RECUP ELEMS HTML
// titre = document.getElementById("titre");
// alert(titre.innerHTML);
// console.log(titre);

// var paragraphes = document.getElementsByTagName('p');
// console.log(paragraphes);
//
// for (let i = 0 ; i < paragraphes.length ; i ++)
// {
//     console.log(paragraphes[i].innerHTML);
//     alert(paragraphes[i].innerHTML);
// }

// var input = document.getElementsByName('pseudo');
// console.log(input);
// alert(input);
//
// for (let i = 0 ; i < input.length ; i ++)
// {
//     console.log(input[i].value);
//     alert(input[i].value);
// }

// var parags = document.querySelector(".paragraphe"); //Renvoie le 1er élément
// console.log(parags);
//alert(parags);

parags = document.querySelectorAll(".paragraphe"); //Renvoie le 1er élément
console.log(parags);
alert(parags);

for (let i = 0 ; i < parags.length ; i ++)
{
    console.log(parags[i].innerHTML);
    alert(parags[i].innerHTML);
}



// TABLEAUX #2

//let tab = ["elem1", "elem2", "elem3"];

//alert(tab[0]);
//console.log(tab.indexOf("elem2"));
/*
let promptText = prompt("Entrer le nom d\'un element");

if (tab.indexOf(promptText) !== -1)
    console.log(tab.length)

if (tab.length !== -1) console.log(tab.join(" "));

 */

// OBJETS
/*
function Personne (nom, age, sexe)
{
    this.nom = nom;
    this.age = age;
    this.sexe = sexe;
}

function Voiture (fab, an, prop)
{
    this.fabricant = fab;
    this.annee = an;
    this.proprietaire = prop;

    this.genererMessage = function() {
        alert(this.proprietaire.nom + " possède une " + this.fabricant)
    }
}

user1 = new Personne("Jean", 37, "M");

console.log(user1);

v = new Voiture("Soda", "1999", user1);

console.log(v);

v.genererMessage();

v.proprietaire.nom = "Bloc";
v.genererMessage();

console.log(user1);

 */