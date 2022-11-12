$(document).ready(function () {
    $("#menu").click(function () {
        var a = $(".navbar").toggleClass("add");
        console.log(a);

    });

    $("#dark").click(function () {
        $("body").toggleClass("btn_dark");

    });

});
