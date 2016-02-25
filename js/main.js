$(document).ready(function () {

    $("#name-results").html("<br><ul class=\"list-group\"><li class=\"list-group-item\">Tryck på en knapp för att slumpa ett namn.</li><ul>");

    var generatedNames = [];
    var namesToGenerate = 5;

    $("#mittlandare").click(function () {
        displayRandomName(this.id, $("#gender input:radio:checked").val(), namesToGenerate);
    });

    $("#stormlandare").click(function () {
        displayRandomName(this.id, $("#gender input:radio:checked").val(), namesToGenerate);
    });

    $("#virann").click(function () {
        displayRandomName(this.id, $("#gender input:radio:checked").val(), namesToGenerate);
    });
    $("#troll").click(function () {
        displayRandomName(this.id, $("#gender input:radio:checked").val(), namesToGenerate);
    });

    function displayRandomName(people, gender, namesToGenerate) {
        fillGeneratedNames(people, gender, namesToGenerate);
        $("#name-results").html(generateHtmlOutput());
        generatedNames = [];
    }

    function fillGeneratedNames(people, gender, numberOfNames) {
        for (; numberOfNames > 0; numberOfNames--) {
            generatedNames.push(getRandomName(people, gender));
        }
    }

    function generateHtmlOutput() {
        var htmlOutputString = "<br><ul class=\"list-group\">";

        generatedNames.forEach(function (element) {
            htmlOutputString = htmlOutputString.concat("<li class=\"list-group-item capitalize\">" + element + "</li>")
        }, this);

        htmlOutputString = htmlOutputString.concat("<ul>");

        return htmlOutputString;
    }

    function randomNumber(max) {
        return Math.floor((Math.random() * max) + 1);
    }

    function getRandomName(people, gender) {
        var prefix = getRandomPrefix(people);
        var suffix = getRandomSuffix(people, gender);

        return prefix.concat(suffix);
    }

    function getRandomPrefix(people) {
        var prefix = [];
        if (people === "mittlandare") {
            prefix = ["Bren", "Bran", "Edel", "Edil", "Eid", "Eo", "Gul", "Gal", "Guld", "Gul", "Hedel", "Her", "Log", "Mau", "Maug", "Mor", "Mord"];
        }
        if (people === "stormlandare") {
            prefix = ["as", "bod", "bryn", "hall", "hraf", "ing", "jor", "tor", "vig", "vret"];
        }
        if (people === "virann") {
            prefix = ["Ber", "Beor", "Bur", "Buor", "Bewr", "Bewor", "Brun", "Bruni", "Bran", "Brani", "Bron", "Broni", "Donni", "Dunni", "Ed", "Edel", "Ev", "Evel", "Fri", "Fride", "Fra", "Frade", "Fru", "Frude", "Gal", "Gals", "Gol", "Gols", "Hun", "Huni", "Hen", "Heni", "Klod", "Klodi", "Klud", "Kludi", "Mer", "Mero", "Mor", "Moro", "Ro", "Rode", "Ru", "Rude", "Sor", "Sork", "Sar", "Sark", "Sul", "Suli", "Sol", "Soli", "Sal", "Sali", "Tryn", "Tryni", "Tron", "Troni"];
        }
        if (people === "troll") {
            prefix = ["a", "nak", "gnak", "vårt", "vårta", "årt", "dy", "dry", "dryg", "e", "fis", "fisk", "ful", "full", "furm", "gri", "grik", "grinn", "gris", "hog", "ke", "klo", "knorr", "lill", "knott"];
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
        if (people === "stormlandare") {
            if (gender === "male") {
                suffix = ["biorn", "geir", "grim", "galt", "jald", "orm", "ulf", "ur", "vald", "varr"];
            }
            else if (gender === "female") {
                suffix = ["a", "dis", "dott", "gerd", "hild", "umbla", "unn", "veig", "vida", "vigg"];
            }
        }
        if (people === "virann") {
            if (gender === "male") {
                suffix = ["bad", "gar", "gist", "kar", "kind", "kull", "pis", "red", "rik", "till", "thill", "walan", "vard", "wig", "vik"];
            }
            else if (gender === "female") {
                suffix = ["th", "dith", "fing", "gond", "hed", "hedd", "kild", "len", "mynt", "mynta", "nell", "sta", "stai", "strid", "thne", "tilde", "winda"];
            }
        }
        if (people === "troll") {
            suffix = ["lork", "lorsk", "lus", "mo", "must", "ogg", "päls", "ryt", "sno", "snor", "snus", "stink", "sto", "stor", "tande", "tide", "tov", "urg", "vis", "yge", "ygel", "yt"];
        }

        return suffix[randomNumber(suffix.length) - 1];
    }

});


