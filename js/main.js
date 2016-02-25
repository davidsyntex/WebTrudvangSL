$(document).ready(function () {

    var generatedNames = [];

    $("#mittlandare").click(function () {
        var gender = $("#gender input:radio:checked").val();
        fillGeneratedNames("mittlandare", gender, 10);
        $("#name-results").html(generateHtmlOutput());
        generatedNames = [];
    });

    $("#stormlandare").click(function () {
        var gender = $("#gender input:radio:checked").val();
        fillGeneratedNames("mittlandare", gender, 10);
        $("#name-results").html(generateHtmlOutput());
        generatedNames = [];
    });

    $("#btn3").click(function () {
        $("#test3").val("Dolly Duck");
    });

    function fillGeneratedNames(people, gender, numberOfNames) {
        for (; numberOfNames > 0; numberOfNames--) {
            generatedNames.push(getRandomName("mittlandare", gender));
        }
    }

    function generateHtmlOutput() {
        var htmlOutputString = "<ul>";

        generatedNames.forEach(function (element) {
            htmlOutputString = htmlOutputString.concat("<li>" + element + "</li>")
        }, this);

        htmlOutputString = htmlOutputString.concat("<ul>");

        return htmlOutputString;
    }

    function randomNumber(max) {
        return Math.floor((Math.random() * max) + 1);
    }

    function getRandomName(people, gender) {

        console.log(people);
        console.log(gender);

        var prefix = getRandomPrefix(people);
        var suffix = getRandomSuffix(people, gender);

        return prefix.concat(suffix);
    }

    function getRandomPrefix(people) {
        var prefix = [];
        if (people === "mittlandare") {
            prefix = ["Bren", "Bran", "Edel", "Edil", "Eid", "Eo", "Gul", "Gal", "Guld", "Gul", "Hedel", "Her", "Log", "Mau", "Maug", "Mor", "Mord"];
            console.log(prefix[0]);
        }
        return prefix[randomNumber(prefix.length) - 1];
    }

    function getRandomSuffix(people, gender) {
        var suffix = [];
        if (people === "mittlandare") {
            if (gender === "male") {
                suffix = ["ard", "bard", "jar", "gjar", "ed", "hed", "finn", "fraidh", "han", "marr", "red", "rik", "win", "winn"];
            }
            else if (gender === "female") {
                suffix = ["non", "annon", "de", "elde", "eid", "heid", "trude", "itrude", "frid", "lynn", "na", "nhja", "rynn", "wa", "wen"];
            }
        }
        return suffix[randomNumber(suffix.length) - 1];
    }

});


