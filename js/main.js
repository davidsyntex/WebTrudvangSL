$(document).ready(function () {
    $("#navbar").load("navbar.html");

    ResetNamePeopleResultsSwedish();
    ResetNameThingsResultsSwedish();

    var generatedNames = [];
    var namesToGenerate = 5;

    $("#namePeople").find("button").click(function () {
        fillGeneratedNamesPeople(this.id, $("#gender").find("input:radio:checked").val(), namesToGenerate);
        displayRandomPeopleName();
        clearGeneratedNames();
    });

    $("#nameThings").find("button").click(function () {
        fillGeneratedNamesThings(this.id, namesToGenerate);
        displayRandomThingsName();
        clearGeneratedNames();
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

    function getRandomNumber(max) {
        return Math.floor((Math.random() * max) + 1);
    }

    function getRandomPeopleName(people, gender) {
        return getRandomPrefix(people) + getRandomPeopleSuffix(people, gender);
    }

    function getRandomThingsName(value) {
        return getRandomPrefix(value) + getRandomThingsSuffix(value);
    }

    function getRandomPrefix(value) {
        var prefix = [];
        if (value === "mittlandare") {
            prefix = ["Bren", "Bran", "Edel", "Edil", "Eid", "Eo", "Gul", "Gal", "Guld", "Gul", "Hedel", "Her", "Log", "Mau", "Maug", "Mor", "Mord"];
        }

        if (value === "stormlandare") {
            prefix = ["as", "bod", "bryn", "hall", "hraf", "ing", "jor", "tor", "vig", "vret"];
        }

        if (value === "virann") {
            prefix = ["Ber", "Beor", "Bur", "Buor", "Bewr", "Bewor", "Brun", "Bruni", "Bran", "Brani", "Bron", "Broni", "Donni", "Dunni", "Ed", "Edel", "Ev", "Evel", "Fri", "Fride", "Fra", "Frade", "Fru", "Frude", "Gal", "Gals", "Gol", "Gols", "Hun", "Huni", "Hen", "Heni", "Klod", "Klodi", "Klud", "Kludi", "Mer", "Mero", "Mor", "Moro", "Ro", "Rode", "Ru", "Rude", "Sor", "Sork", "Sar", "Sark", "Sul", "Suli", "Sol", "Soli", "Sal", "Sali", "Tryn", "Tryni", "Tron", "Troni"];
        }

        if (value === "dvarg") {
            prefix = ["Bor", "Brok", "Dvor", "Fifun", "Glo", "Gly", "Jo", "Jor", "Niful", "Ru", "Ruk", "Tjeb", "Tor", "Zvor"];
        }

        if (value === "alf") {
            prefix = ["Harp", "Jep", "Jeppi", "Kyll", "Lep", "Lepo", "Norma", "Normo", "Pojh", "Pojha", "Sirp", "Sirpa", "Syll", "Vaj", "Vajne", "Val", "Vali"];
        }

        if (value === "troll") {
            prefix = ["a", "nak", "gnak", "vårt", "vårta", "årt", "dy", "dry", "dryg", "e", "fis", "fisk", "ful", "full", "furm", "gri", "grik", "grinn", "gris", "hog", "ke", "klo", "knorr", "lill", "knott"];
        }

        if (value === "by") {
            prefix = ["Al", "alfe", "Aske", "Atla", "Aud", "Audur", "Bjalfe", "Bjorn", "Björk", "Blid", "Blot", "Bock", "Borke", "Brage", "Brase", "Bronja", "Bål", "Egil", "Ejlög", "Ek", "Ese", "Fager", "Falk", "Frost", "Gad", "Galt", "Gaute", "Gerd", "Gisle", "Gno", "Gorm", "Grim", "Grise", "Gruve", "Grå", "Gyda", "Hamra", "Helga", "Hella", "Hrim", "Häll", "Jon", "Jorna", "Jot", "Järn", "Jökull", "Jöt", "Kal", "Kjöle", "Koppar", "Korp", "Kråk", "Kviste", "Laupe", "Lille", "Lo", "Lov", "Marsk", "Mjöd", "Mull", "Möln", "Nid", "Njal", "Odd", "Orm", "Ost", "Oster", "Rafner", "Rauk", "Run", "Ränne", "Silver", "Skuru", "Smed", "Sol", "Sot", "Starke", "Sten", "Stig", "Stor", "Storm", "Sund", "Tall", "Tindra", "Troll", "Tur", "Ulf", "Ulm", "Unn", "Vide", "Vild", "Vinter", "Vis", "Vit", "Vret", "Väster", "Åker", "Ås", "Älg", "Öst"];
        }

        if (value === "vardshus") {
            prefix = ["troll", "röt", "orm", "hugg", "skald", "svin", "rövar", "mjöd", "hjälte", "korp", "stormes", "bronje", "tråg", "skogs", "öl", "mjöd", "tvilling", "härjar", "garm", "svultna", "lytte", "trasiga", "stegrande", "frusna", "bäcka", "gave", "saga", "skägg", "moss", "lav", "fjäll", "barr", "drak", "möra", "skummande", "galna", "uppretade", "slaktade", "lagade", "blå", "röda", "gröna", "gula", "vita", "svarta", "bruna", "försupne"];
        }

        if (value === "vaxt") {
            prefix = ["Afton", "Alva", "Bergs", "Bjark", "Björn", "Blad", "Blod", "Blods", "Brons", "Dagg", "Dis", "Drak", "Dvärg", "Dy", "Eld", "Fackel", "Fager", "Finger", "Garna", "Gave", "Grim", "Grå", "Gråe", "Gul", "Gull", "Har", "Hingst", "Himla", "Hird", "Hjort", "Humle", "Hväle", "Häst", "Häx", "Igel", "Jarla", "Jord", "Jorn", "Jotun", "Järn", "Jätte", "Kalder", "Knytt", "Kol", "Koppar", "Korp", "Kungs", "Kärr", "Kärr", "Lom", "Lund", "Mal", "Manna", "Marsk", "Mist", "Mork", "Mörk", "Myr", "Mån", "Natt", "Nät", "Orm", "Ox", "Pil", "Puder", "Rafner", "Ros", "Röd", "Silver", "Sjö", "Skarp", "Skav", "Skogs", "Skvätt", "Snö", "Sol", "Sten", "Stjärn", "Stjärne", "Storme", "Svart", "Svin", "Tagg", "Talg", "Tistel", "Tok", "Troll", "Tråd", "Törn", "Vall", "Varg", "Vatten", "Vild", "Vinter", "Vit", "Vitner", "Vår", "Vätte", "Älg", "Älv", "Älva", "Älve", "Äng", "Änga", "Ängs"];
        }

        return prefix[getRandomNumber(prefix.length) - 1];


    }

    function getRandomPeopleSuffix(chosePeople, chosenGender) {
        var suffix = [];

        if (chosePeople === "dvarg" || chosePeople === "troll") {
            suffix = nameLists["people"][chosePeople]["suffix"];
        } else {
            suffix = nameLists["people"][chosePeople][chosenGender];
        }
        return suffix[getRandomNumber(suffix.length) - 1];
    }

    function getRandomThingsSuffix(value) {
        var suffix = [];

        if (value === "by") {
            suffix = ["al", "anger", "backa ", "berg ", "blot", "bod ", "boda ", "borg", "botten", "brant", "bro ", "bruk ", "brunn ", "by ", "bäck ", "dal", "dis ", "ed", "fjord ", "fjäll ", "fors", "fors ", "frost ", "fält", "gang", "gap ", "gard ", "gull", "gård ", "haga ", "hall", "hammar ", "hamn ", "harg ", "hed", "hem", "holm ", "holt ", "hult", "häll", "hög ", "inge ", "klint", "klippan ", "kulla ", "kvarn", "källa ", "köping", "lev ", "lid ", "ljung ", "lund ", "lycke ", "löse ", "löv ", "mark ", "mosse", "mönja ", "nejd", "näs ", "om", "pass", "ro", "rum ", "rup ", "ryd ", "rödja ", "sala ", "skog ", "slaga ", "sorg ", "sta", "stein", "stena ", "stig", "stock ", "sund", "tegn ", "ting", "tjärn ", "tofta ", "topp", "torp ", "träsk ", "tun", "tune ", "um ", "vad", "vall", "vi ", "vik", "vind ", "virja ", "vy ", "å", "åker ", "åkra ", "ås ", "älv", "äng"];
        }
        if (value === "vardshus") {
            suffix = ["hallen", "grytet", "hålan", "stian", "krogen", "syltan", "svinet", "björnen", "stugan", "huset", "hålet", "vaken", "viken", "tjärn", "torp", "fjäll", "huvudet", "tornet", "korsning", "korsningen", "riket", "platsen", "punkten", "galten", "vandraren", "ponnyn", "bocken", "kaninen", "stopet", "hålet", "vaken", "viken", "tjärn", "torp", "huvudet", "hus", "katten", "ormen", "skräddaren"];
        }

        if (value === "vaxt") {
            suffix = ["anis", "apel", "ax", "bark", "beta", "bjärt", "blad", "blom", "blomster", "bräken", "buske", "bär", "böna", "cikoria", "dill", "ek", "en", "fibbla", "fläder", "frö", "glädje", "gran", "gäck", "hallon", "hassel", "hatt", "havre", "hirs", "hjortron", "klubba", "klöver", "knöl", "kocka", "koriander", "korn", "kott", "kotte", "krusbär", "krydda", "kummin", "kål", "körvel", "lav", "lilja", "lin", "lingon", "lök", "löv", "meliss", "morot", "mossa", "murkla", "mynta", "målla", "måra", "nate", "nässla", "peppar", "päron", "rabarber", "regn", "ris", "rot", "råg", "räfsa", "rättika", "sallad", "sippa", "själke", "skatta", "skimra", "skivling", "skräppa", "sköna", "slån", "smultron", "snår", "sopp", "sporre", "starr", "sticka", "stjärna", "storm", "svamp", "timjan", "torn", "tryffel", "tunga", "tuva", "törn", "törne", "ull", "vallmo", "vass", "vete", "vide", "viva", "väv", "ärt", "ärtskocka", "ört"];
        }

        return suffix[getRandomNumber(suffix.length) - 1];
    }

    function ResetNamePeopleResultsSwedish() {
        $("#namePeopleResults").html('<br><ul class="list-group"><li class="list-group-item">Tryck på en knapp för att slumpa ett namn.</li></ul>');
    }

    function ResetNameThingsResultsSwedish() {
        $("#nameThingsResults").html('<br><ul class="list-group"><li class="list-group-item">Tryck på en knapp för att slumpa ett namn. Du kan behöva fixa till namnen i efterhand.</li></ul>');
    }
});
