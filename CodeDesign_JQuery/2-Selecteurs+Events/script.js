//Sélecteurs
$(function () { // $(document).ready(function () {})
    $('#hey').html('hello world');
});

$(function () {
    $('.slt').html("<p>Bonjour à tous</p>");
});

$(function () { // $(document).ready(function () {})
    $('div').html('<strong>Texte dans la balise div</strong>');
});


$(function () {
    let ch = $('.colChange');
    ch.hover(function () {
        $(this).css({'color' : 'red'}) //this <=> "colChange"
    });
});
