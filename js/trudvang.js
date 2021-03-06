$(document).ready(function () {
    function getRandomNumber(max) {
        return Math.floor((Math.random() * max) + 1);
    }

    $("#navbar").load("http://davidsyntex.github.io/WebTrudvangSL/home/navbar.html", function () {
        $.getScript('http://davidsyntex.github.io/WebTrudvangSL/js/language.js', function(){
            //LoadLanguages('http://davidsyntex.github.io/WebTrudvangSL/json/language.json');
        });
    });
    $("#siteFooter").load("http://davidsyntex.github.io/WebTrudvangSL/home/footer.html", function () {});

    $('body').scrollspy({
        target: '.bs-docs-sidebar',
        offset: 50
    });

    var peopleSuffixList;
    var peoplePrefixList;
    var thingList;

    $.getJSON('http://davidsyntex.github.io/WebTrudvangSL/game/trudvang/json/trudvangPeopleSuffixSwedish.json', function (json) {
        peopleSuffixList = json;
    });

    $.getJSON('http://davidsyntex.github.io/WebTrudvangSL/game/trudvang/json/trudvangPeoplePrefixSwedish.json', function (json) {
        peoplePrefixList = json;
    });
    $.getJSON('http://davidsyntex.github.io/WebTrudvangSL/game/trudvang/json/trudvangThingSwedish.json', function (json) {
        thingList = json;
    });

    ResetNamePeopleResults();
    ResetNameThingsResults();
    ResetKroppspoangResults();

    var generatedNames = [];
    var namesToGenerate = 5;

    $("#namePeople").find("button").click(function () {
        fillGeneratedNamesPeople(this.id, $("#nameGender").find("input:radio:checked").val(), namesToGenerate);
        displayRandomPeopleName();
        clearGeneratedNames();
    });

    $("#nameThings").find("button").click(function () {
        fillGeneratedNamesThings(this.id, namesToGenerate);
        displayRandomThingsName();
        clearGeneratedNames();
    });

    $("#nameGender").find("input:radio").change(function () {
        ResetNamePeopleResults();
    });

    $("#kroppspoangTotala").change(function () {
        displayKroppspoang();
    });

    $("#kroppspoangRakna").click(function () {
        displayKroppspoang();
    });

    $("#fardigheterRakna").click(function () {
        displayFardigheter();
    });

    $("#fardigheterGammaltFV").change(function () {
        var fardigheterNyttFV = $("#fardigheterNyttFV");
        var fardigheterGammaltFV = $("#fardigheterGammaltFV");

        if (fardigheterGammaltFV.val() >= fardigheterNyttFV.val()) {
            fardigheterNyttFV.val(+fardigheterGammaltFV.val() + 1);
        }
        displayFardigheter();
    });
    $("#fardigheterNyttFV").change(function () {
        var fardigheterNyttFV = $("#fardigheterNyttFV");
        var fardigheterGammaltFV = $("#fardigheterGammaltFV");

        if (fardigheterNyttFV.val() <= fardigheterGammaltFV.val()) {
            fardigheterGammaltFV.val(+fardigheterNyttFV.val() - 1);
        }
        displayFardigheter();
    });
    $("#fardigheterMod").change(function () {
        displayFardigheter();
    });

    function displayFardigheter() {
        var apKostnad = 0;
        var gammaltFV = $("#fardigheterGammaltFV").val();
        var nyttFV = $("#fardigheterNyttFV").val();
        var mod = $("#fardigheterMod").val();

        for (var i = +gammaltFV + 1; i <= nyttFV; i++) {
            if (+i + +mod < 1) {
                apKostnad = +apKostnad + 1;
            } else {
                apKostnad = +apKostnad + +i + +mod;
            }
        }
        generatedNames.push(apKostnad + " ÄP");
        $("#fardigheterResults").html(generateHtmlOutput());
        clearGeneratedNames();
    }

    function displayKroppspoang() {
        var totalaKroppspoang = $("#kroppspoangTotala").val();
        var kroppspoangA = Math.ceil(totalaKroppspoang / 2);
        var kroppspoangB = totalaKroppspoang;
        var kroppspoangC = Math.round(totalaKroppspoang / 1.5);
        generatedNames.push("Huvud: " + kroppspoangA);
        generatedNames.push("Högerarm: " + kroppspoangA);
        generatedNames.push("Vänsterarm: " + kroppspoangA);
        generatedNames.push("Bröstkorg: " + kroppspoangB);
        generatedNames.push("Mage: " + kroppspoangC);
        generatedNames.push("Högerben: " + kroppspoangC);
        generatedNames.push("Vänsterben: " + kroppspoangC);
        $("#kroppspoangResults").html(generateHtmlOutput());
        clearGeneratedNames();
    }

    function clearGeneratedNames() {
        generatedNames = [];
    }

    function displayRandomPeopleName() {
        $("#namePeopleResults").html(generateHtmlOutput());
    }

    function displayRandomThingsName() {
        $("#nameThingsResults").html(generateHtmlOutput());
    }

    function fillGeneratedNamesPeople(people, gender, numberOfNames) {
        for (; numberOfNames > 0; numberOfNames--) {
            generatedNames.push(getRandomPeopleName(people, gender));
        }
    }

    function fillGeneratedNamesThings(value, numberOfNames) {
        for (; numberOfNames > 0; numberOfNames--) {
            generatedNames.push(getRandomThingsName(value));
        }
    }

    function generateHtmlOutput() {
        var htmlOutputString = '<br><ul class="list-group">';

        generatedNames.forEach(function (element) {
            htmlOutputString = htmlOutputString.concat('<li class="list-group-item capitalize">' + element + "</li>")
        }, this);

        htmlOutputString = htmlOutputString.concat("<ul>");

        return htmlOutputString;
    }

    function getRandomPeopleName(people, gender) {
        return getRandomPeoplePrefix(people) + getRandomPeopleSuffix(people, gender);
    }

    function getRandomThingsName(thing) {

        var prefixRandomNumber = getRandomNumber(thingList[thing]["prefix"].length) - 1;
        var suffixRandomNumber = getRandomNumber(thingList[thing]["suffix"].length) - 1;


        var prefix = thingList[thing]["prefix"][prefixRandomNumber];
        var suffix = thingList[thing]["suffix"][suffixRandomNumber];

        while (suffix === prefix) {
            suffix = thingList[thing]["suffix"][getRandomNumber(thingList[thing]["suffix"].length) - 1];
        }

        return prefix + suffix;
    }

    function getRandomPeoplePrefix(people) {
        return peoplePrefixList[people][getRandomNumber(peoplePrefixList[people].length) - 1];
    }

    function getRandomPeopleSuffix(chosenPeople, chosenGender) {
        var suffix = [];

        //console.log(chosenPeople);
        //console.log(chosenGender);

        if (chosenPeople === "dvarg" || chosenPeople === "troll") {
            suffix = peopleSuffixList[chosenPeople]["suffix"];
        } else {
            suffix = peopleSuffixList[chosenPeople][chosenGender];
        }

        return suffix[getRandomNumber(suffix.length) - 1];
    }

    function ResetNamePeopleResults() {
        $("#namePeopleResults").html('<br><ul class="list-group"><li class="list-group-item">Tryck på en knapp för att slumpa ett namn.</li></ul>');
    }

    function ResetNameThingsResults() {
        $("#nameThingsResults").html('<br><ul class="list-group"><li class="list-group-item">Tryck på en knapp för att slumpa ett namn. Du kan behöva fixa till namnen i efterhand.</li></ul>');
    }

    function ResetKroppspoangResults() {
        $("#kroppspoangResults").html('<br><ul class="list-group"><li class="list-group-item">Skriv in totala kroppspoäng och tryck på Räkna ut.</li></ul>');
    }
});
