/*
$(function () {
    let hov = ("#content a");

    hov.mouseenter(function () {
        $(this).find('span.bg').hide().fadeTo(500, 0.7);
    })
})
*/



$(function () {
    //vars declaration
    let dark = $(".pane");
    let img = $('#content article img');
    let content = $('.pane_info');

    //hide hover
    dark.hide();

    //show dark on img hover
    img.mouseenter(function () {
        //dark.fadeOut("slow");

        $(this).next().fadeIn("slow");
        content.addClass('pane_info_hover');
    })

    dark.mouseleave(function () {
        $(this).fadeOut("slow");
        content.removeClass('pane_info_hover');
    })
});