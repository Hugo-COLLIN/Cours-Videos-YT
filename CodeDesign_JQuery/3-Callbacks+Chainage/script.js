$(function () {
    let btn = $('.btn');
    let parag = $("p");

    //Chainage
    parag.css({'color' : '#000'}).css({'background-color' : 'red'});

    btn.click(function () {
        //Callback
        parag.hide("slow", function () { //hide s'exécute, puis appelle une fonction de callback qui affiche une alert
            alert("Paragraphe caché !");
        });

        //Ci-dessous, se fait en meme temps
        //parag.hide("slow");
        //alert("Caché !");
    });
});
