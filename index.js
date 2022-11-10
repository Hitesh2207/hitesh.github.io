$(document).ready(function () {

    $("#btn").mouseleave(function () {
        $(this).css("transform", "");
        $(this).css("width", "");
    })

    $("#btn").click(function () {
        $("li").css("width", "50px");
        $("li").css("display", "inline-block");
        $("li").css("padding", "20px");

    });
});