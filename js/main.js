$(document).ready(function () {
    $("#navbar").load("http://davidsyntex.github.io/WebTrudvangSL/game/general/navbar.html", function () {
        $.getScript('http://davidsyntex.github.io/WebTrudvangSL/js/language.js', function(){
            LoadLanguages('http://davidsyntex.github.io/WebTrudvangSL/json/language.json');
        });
    });
});
