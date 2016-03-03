$(document).ready(function () {
    $("#navbar").load("http://syntex.noip.me/zrh/game/general/navbar.html", function () {
        $.getScript('http://syntex.noip.me/zrh/js/language.js', function(){
            LoadLanguages('http://syntex.noip.me/zrh/json/language.json');
        });
    });
});
