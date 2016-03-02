$(document).ready(function () {
    $("#navbar").load("http://davidsyntex.github.io/WebTrudvangSL/game/general/navbar.html", function () {
        $("#home").click(function () {
            $("#site").load("game/general/home.html");
        });

        $("#gameTrudvang").click(function () {
            $("#site").load("game/trudvang/site.html", function () {
                Trudvang();
            });
        })
    });
    $("#site").load("game/general/home.html");
});
