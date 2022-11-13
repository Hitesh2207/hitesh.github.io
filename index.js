$(document).ready(function () {
    $("#menu").click(function () {
        var a = $(".navbar").toggleClass("add");
        console.log(a);

    });

    $("#dark").click(function () {
        $("body").toggleClass("btn_dark");

    });

    // $("#form").click(function () {
    //     var a = $("#name").attr();
    //     document.write(a);

    // });

    $("#mail").click(function () {
        $(".m").toggleClass("show");
        console.log(a);
    });

    $("#contact").click(function () {
        $(".p").toggleClass("show_p");
    });

});