$(document).ready(function () {
    function getRandomNumber(max) {
        return Math.floor((Math.random() * max) + 1);
    }

    $("#navbar").load("http://davidsyntex.github.io/WebTrudvangSL/home/navbar.html", function () {
        $.getScript('http://davidsyntex.github.io/WebTrudvangSL/js/language.js', function(){
            //LoadLanguages('http://davidsyntex.github.io/WebTrudvangSL/json/language.json');
        });
    });

    $('body').scrollspy({
        target: '.bs-docs-sidebar',
        offset: 50
    });

    var traitList;

    $.getJSON('http://davidsyntex.github.io/WebTrudvangSL/general/npc/json/npc.json', function (json) {
        traitList = json;
    });

    ResetNpcTraitsResults();

    var generatedNames = [];
    var namesToGenerate = 5;

    $("#traitNpc").find("button").click(function () {
        fillGeneratedTraitsNpc(this.id, namesToGenerate);
        displayRandomNpcTrait();
        clearGeneratedNames();
    });

    function clearGeneratedNames() {
        generatedNames = [];
    }

    function displayRandomNpcTrait() {
        $("#traitNpcResults").html(generateHtmlOutput());
    }

    function fillGeneratedTraitsNpc(traitType, numberOfNames) {
        for (; numberOfNames > 0; numberOfNames--) {
            var generatedTrait = getRandomNpcTrait(traitType);

            while($.inArray(generatedTrait, generatedNames) !== -1)
            {
                generatedTrait = getRandomNpcTrait(traitType);
            }
            generatedNames.push(generatedTrait);
        }
    }

    function generateHtmlOutput() {
        var htmlOutputString = '<br><ul class="list-group">';

        generatedNames.forEach(function (element) {
            htmlOutputString = htmlOutputString.concat('<li class="list-group-item">' + element + "</li>")
        }, this);

        htmlOutputString = htmlOutputString.concat("<ul>");

        return htmlOutputString;
    }

    function getRandomNpcTrait(traitType) {
        return traitList[traitType][getRandomNumber(traitList[traitType].length) - 1];
    }

    function ResetNpcTraitsResults() {
        $("#traitNpcResults").html('<br><ul class="list-group"><li class="list-group-item">Tryck på en knapp för att slumpa ett kännetecken.</li></ul>');
    }
});
