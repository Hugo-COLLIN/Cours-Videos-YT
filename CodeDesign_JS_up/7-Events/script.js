//Méthode 1
function change() {
    var divCarre = document.querySelector(".blue");
    divCarre.classList.toggle('orange');
}

//Méthode 2
var btn2 = document.getElementById('btn2');
btn2.ondblclick = function () { //onmouseclick, onmouseover, onmouseleave, ondblclick
    var divCarre2 = document.querySelector('.green');
    divCarre2.classList.toggle('orange');
}