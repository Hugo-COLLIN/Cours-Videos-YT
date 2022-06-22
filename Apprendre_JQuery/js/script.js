$(function () {
    let hov = ("#content a");

    hov.mouseenter(function () {
        $(this).find('span.bg').hide().fadeTo(500, 0.7);
    })
})



/*
$(function () {
    //vars declaration
    let dark = $(".hov");
    let img = $('img');
    let content = $('.content');

    //hide hover
    dark.hide();

    //show dark on img hover
    img.mouseenter(function () {
        $(this).next().fadeIn("slow");
        content.addClass('.content_hover');
    })

    dark.mouseleave(function () {
        $(this).fadeOut("slow");
        content.removeClass('content_hover');
    })
});
*/