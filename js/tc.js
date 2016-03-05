$(document).ready(function () {
    function getRandomNumber(max) {
        return Math.floor((Math.random() * max) + 1);
    }

    $("#navbar").load("http://davidsyntex.github.io/WebTrudvangSL/home/navbar.html", function () {
        $.getScript('http://davidsyntex.github.io/WebTrudvangSL/js/language.js', function () {
            //LoadLanguages('http://davidsyntex.github.io/WebTrudvangSL/game/tc/json/language.json');
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

    $.getJSON('http://davidsyntex.github.io/WebTrudvangSL/game/tc/json/trudvangPeopleSuffixEnglish.json', function (json) {
        peopleSuffixList = json;
    });

    $.getJSON('http://davidsyntex.github.io/WebTrudvangSL/game/tc/json/trudvangPeoplePrefixEnglish.json', function (json) {
        peoplePrefixList = json;
    });
    $.getJSON('http://davidsyntex.github.io/WebTrudvangSL/game/tc/json/trudvangThingEnglish.json', function (json) {
        thingList = json;
    });

    ResetNamePeopleResults();
    ResetNameThingsResults();

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
            console.log("Loopar");
            suffix = thingList[thing]["suffix"][getRandomNumber(thingList[thing]["suffix"].length) - 1];
        }

        return prefix + " " + suffix;
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
});
