$(document).ready(function () {
    $("#navbar").load("http://davidsyntex.github.io/WebTrudvangSL/home/navbar.html", function () {
        $.getScript('http://davidsyntex.github.io/WebTrudvangSL/js/language.js', function(){
            LoadLanguages('http://davidsyntex.github.io/WebTrudvangSL/json/language.json');
        });
    });
    $("#siteFooter").load("http://davidsyntex.github.io/WebTrudvangSL/home/footer.html", function () {});
});
