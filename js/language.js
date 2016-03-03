var languageStrings = null;
var languageNavbarStrings = null;
var currentLanguage = "swedish";

$.getJSON('http://syntex.noip.me/zrh/game/general/json/language.json', function (json) {
    languageNavbarStrings = json;
    languageSwitcher();
});

function languageSwitcher() {
    var languageSwitcher = $("#languageSwitcher");
    //console.log(languageSwitcher.find("input:radio:checked").val());

    languageSwitcher.find("input:radio").change(function () {
        currentLanguage = languageSwitcher.find("input:radio:checked").val();

        if (languageStrings !== null) {
            changeLanguageStrings();
        }
        if (languageNavbarStrings !== null) {

            changeNavbarStrings();
        }
        console.log("Byter till " + currentLanguage);
    });

    currentLanguage = languageSwitcher.find("input:radio:checked").val();
}

function changeLanguageStrings() {
    $.each(languageStrings[currentLanguage], function (key, value) {
        $("#" + key).html(value);
    });
}

function changeNavbarStrings() {
    $.each(languageNavbarStrings[currentLanguage], function (key, value) {
        $("#" + key).html(value);
    });
}

function LoadLanguages(urlToLanguageJSON) {
    $.getJSON('http://syntex.noip.me/zrh/json/language.json', function (json) {
        languageStrings = json;
    });
}
