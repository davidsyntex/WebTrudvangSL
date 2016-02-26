$(document).ready(function () {

    ResetNamePeopleResultsSwedish();
    ResetNameThingsResultsSwedish();

    var selectedLanguage = "Svenska";
    var generatedNames = [];
    var namesToGenerate = 5;

    $("#languageSwitcher").click(function () {
        console.log("Pressed");
        if ($(this).html() === "English") {
            selectedLanguage = "English";

            $("#peopleHeading").html("Character");
            $("#peopleDescription").html("Gives you a random generated name for a character.");
            $("#thingsHeading").html("Villages, Inns & Plants");
            $("#thingsDescription").html("Gives you a random generated name for a village, inn or plant.");

            ResetNamePeopleResultsEnglish();
            ResetNameThingsResultsEnglish();

            $("#genderFemale").get(0).nextSibling.textContent = "Woman";

            $("#mittlandare").html("Mittlander");
            $("#stormlandare").html("Stormlander");
            $("#virann").html("Viranns");
            $("#dvarg").html("Dwarves");
            $("#alf").html("Elves");
            $("#by").html("Village");
            $("#vardshus").html("Inn");
            $("#vaxt").html("Plant");

            $("#languageSwitcher").html("Svenska");
            return;
        }

        if ($(this).html() === "Svenska") {
            selectedLanguage = "Svenska";

            $("#peopleHeading").html("Karaktär");
            $("#peopleDescription").html("Ger dig ett slumpat namn för en karaktär.");
            $("#thingsHeading").html("Byar, Värdshus & Växter");
            $("#thingsDescription").html("Ger dig ett slumpat namn för en by, ett värdshus eller en växt.");

            ResetNamePeopleResultsSwedish();
            ResetNameThingsResultsSwedish();

            $("#mittlandare").html("Mittländare");
            $("#stormlandare").html("Stormländare");
            $("#virann").html("Virann");
            $("#dvarg").html("Dvärg");
            $("#alf").html("Alf");
            $("#by").html("By");
            $("#vardshus").html("Värdshus");
            $("#vaxt").html("Växt");

            $("#genderFemale").get(0).nextSibling.textContent = "Kvinna";
            $("#languageSwitcher").html("English");
            return;
        }

    });

    $("#gender input:radio").change(function () {
        if (selectedLanguage === "Svenska") {
            ResetNamePeopleResultsSwedish();
        }
        if (selectedLanguage === "English") {
            ResetNamePeopleResultsEnglish();
        }
    });

    $("#namePeople button").click(function () {
        displayRandomPeopleName(this.id, $("#gender input:radio:checked").val(), namesToGenerate);
    });

    $("#nameThings button").click(function () {
        displayRandomThingsName(this.id, namesToGenerate);
    });

    function displayRandomPeopleName(people, gender, namesToGenerate) {
        fillGeneratedNamesPeople(people, gender, namesToGenerate);
        $("#namePeopleResults").html(generateHtmlOutput());
        generatedNames = [];
    }

    function displayRandomThingsName(value, namesToGenerate) {
        fillGeneratedNamesThings(value, namesToGenerate);
        $("#nameThingsResults").html(generateHtmlOutput());
        generatedNames = [];
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

    function getRandomPeopleName(people, gender) {
        var prefix = getRandomPrefix(people);
        var suffix = getRandomPeopleSuffix(people, gender);

        return prefix.concat(suffix);
    }

    function getRandomThingsName(value) {
        var prefix = getRandomPrefix(value);
        var suffix = getRandomThingsSuffix(value);
        return prefix + suffix;
    }

    function getRandomPrefix(value) {
        var prefix = [];

        if (selectedLanguage === "Svenska") {
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
                prefix = ["troll","röt","orm","hugg","skald","svin","rövar","mjöd","hjälte","korp","stormes","bronje","tråg","skogs","öl","mjöd","tvilling","härjar","garm","svultna","lytte","trasiga","stegrande","frusna","bäcka","gave","saga","skägg","moss","lav","fjäll","barr","drak","möra","skummande","galna","uppretade","slaktade","lagade","blå","röda","gröna","gula","vita","svarta","bruna","försupne"];
            }

            if (value === "vaxt") {
                prefix = ["Afton", "Alva", "Bergs", "Bjark", "Björn", "Blad", "Blod", "Blods", "Brons", "Dagg", "Dis", "Drak", "Dvärg", "Dy", "Eld", "Fackel", "Fager", "Finger", "Garna", "Gave", "Grim", "Grå", "Gråe", "Gul", "Gull", "Har", "Hingst", "Himla", "Hird", "Hjort", "Humle", "Hväle", "Häst", "Häx", "Igel", "Jarla", "Jord", "Jorn", "Jotun", "Järn", "Jätte", "Kalder", "Knytt", "Kol", "Koppar", "Korp", "Kungs", "Kärr", "Kärr", "Lom", "Lund", "Mal", "Manna", "Marsk", "Mist", "Mork", "Mörk", "Myr", "Mån", "Natt", "Nät", "Orm", "Ox", "Pil", "Puder", "Rafner", "Ros", "Röd", "Silver", "Sjö", "Skarp", "Skav", "Skogs", "Skvätt", "Snö", "Sol", "Sten", "Stjärn", "Stjärne", "Storme", "Svart", "Svin", "Tagg", "Talg", "Tistel", "Tok", "Troll", "Tråd", "Törn", "Vall", "Varg", "Vatten", "Vild", "Vinter", "Vit", "Vitner", "Vår", "Vätte", "Älg", "Älv", "Älva", "Älve", "Äng", "Änga", "Ängs"];
            }

            return prefix[randomNumber(prefix.length) - 1];
        }
        if (selectedLanguage === "English") {
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
                prefix = ["Alder", "Elf", "Ash", "Atla", "Aud", "Audur", "Bjalfe", "Bjorn", "Birch", "Placid", "Blut", "Buck", "Borke", "Brage", "Brase", "Bronja", "Bale", "Egil", "Ejlög", "Oak", "Ese", "Fair", "Falcon", "Frost", "Gad", "Boar", "Gaute", "Gerd", "Gisle", "Toil", "Gorm", "Grim", "Pig", "Mine", "Grey", "Gyda", "Hammer", "Sanctify", "Hall", "Hrim", "Hall", "Jon", "Jorna", "Jot", "Iron", "Jökull", "Jöt", "Bleak", "kjole", "Copper", "Raven", "Raven", "Twig", "Laupe", "Small", "Lynx", "Laud", "Marsk", "Mead", "Earth", "Cloud", "Nid", "Njal", "Odd", "snake", "east", "Oster", "Rafner", "Rauk", "Runic", "Ränne", "Silver", "Scour", "Smith", "Sun", "Soot", "Stron", "Stone", "Path", "Great", "Storm", "strait", "Pine", "Twinkle", "Troll", "Luck", "Ulf", "Ulm", "Unn", "Willow", "Wild", "Winter", "wise", "Vhite", "Vret", "West", "field", "ridge", "Älg", "Öst"];
            }

            if (value === "vardshus") {
                prefix = ["troll", "rot", "snake", "hugg", "skald", "pig", "robber", "mead", "hero", "raven", "storme's", "bronje", "trough", "forest", "ale", "twin", "ravage", "garm", "starving", "listening", "broken", "prancing", "frozen", "brook", "gave", "saga", "beard", "moss", "lichen", "mountain", "fir needle", "dragon", "tender", "frothy", "crazy", "enraged", "slaughtered", "lagade", "cooked", "red", "green", "yellow", "white", "black", "brown", "drunken "];
                return "The " + (prefix[randomNumber(prefix.length) - 1]);
            }

            if (value === "vaxt") {
                prefix = ["Evening", "Fairy", "mountainous", "Bjark", "bear", "leaf", "Blood", "Bloody", "Bronze", "Dew", "Dis", "Drak", "Dvärg", "Dy", "Eld", "Fackel", "Fager", "Finger", "Garna", "Gave", "Grim", "Grå", "Gråe", "Gul", "Gull", "Har", "Hingst", "Himla", "Hird", "Hjort", "Humle", "Hväle", "Häst", "Häx", "Igel", "Jarla", "Jord", "Jorn", "Jotun", "Järn", "Jätte", "Kalder", "Knytt", "Kol", "Koppar", "Korp", "Kungs", "Kärr", "Kärr", "Lom", "Lund", "Mal", "Manna", "Marsk", "Mist", "Mork", "Mörk", "Myr", "Mån", "Natt", "Nät", "Orm", "Ox", "Pil", "Puder", "Rafner", "Ros", "Röd", "Silver", "Sjö", "Skarp", "Skav", "Skogs", "Skvätt", "Snö", "Sol", "Sten", "Stjärn", "Stjärne", "Storme", "Svart", "Svin", "Tagg", "Talg", "Tistel", "Tok", "Troll", "Tråd", "Törn", "Vall", "Varg", "Vatten", "Vild", "Vinter", "Vit", "Vitner", "Vår", "Vätte", "Älg", "Älv", "Älva", "Älve", "Äng", "Änga", "Ängs"];
            }

            return (prefix[randomNumber(prefix.length) - 1]);
        }


    }

    function getRandomPeopleSuffix(people, gender) {
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

        if (people === "dvarg") {
            suffix = ["olgd", "dolga", "ka", "kka", "ust", "rust", "drank", "gel", "linkk", "logi", "rovv", "van", "var", "zink"];
        }

        if (people === "alf") {
            if (gender === "male") {
                suffix = ["hang", "ehang", "iaho", "piaho", "akka", "ingas", "jias", "lainen", "mojna", "pihi", "taja", "ua"];
            }
            else if (gender === "female") {
                suffix = ["ala", "pala", "atta", "hiska", "ika", "iulu", "iullu", "kosva", "lajna", "likki", "olvi", "sinka"];
            }
        }

        if (people === "troll") {
            suffix = ["lork", "lorsk", "lus", "mo", "must", "ogg", "päls", "ryt", "sno", "snor", "snus", "stink", "sto", "stor", "tande", "tide", "tov", "urg", "vis", "yge", "ygel", "yt"];
        }

        return suffix[randomNumber(suffix.length) - 1];
    }

    function getRandomThingsSuffix(value) {
        var suffix = [];

        if (selectedLanguage === "Svenska") {
            if (value === "by") {
                suffix = ["al", "anger", "backa ", "berg ", "blot", "bod ", "boda ", "borg", "botten", "brant", "bro ", "bruk ", "brunn ", "by ", "bäck ", "dal", "dis ", "ed", "fjord ", "fjäll ", "fors", "fors ", "frost ", "fält", "gang", "gap ", "gard ", "gull", "gård ", "haga ", "hall", "hammar ", "hamn ", "harg ", "hed", "hem", "holm ", "holt ", "hult", "häll", "hög ", "inge ", "klint", "klippan ", "kulla ", "kvarn", "källa ", "köping", "lev ", "lid ", "ljung ", "lund ", "lycke ", "löse ", "löv ", "mark ", "mosse", "mönja ", "nejd", "näs ", "om", "pass", "ro", "rum ", "rup ", "ryd ", "rödja ", "sala ", "skog ", "slaga ", "sorg ", "sta", "stein", "stena ", "stig", "stock ", "sund", "tegn ", "ting", "tjärn ", "tofta ", "topp", "torp ", "träsk ", "tun", "tune ", "um ", "vad", "vall", "vi ", "vik", "vind ", "virja ", "vy ", "å", "åker ", "åkra ", "ås ", "älv", "äng"];
            }
            if (value === "vardshus") {
                suffix = ["hallen", "grytet", "hålan", "stian", "krogen", "syltan", "svinet", "björnen", "stugan", "huset", "hålet", "vaken", "viken", "tjärn", "torp", "fjäll", "huvudet", "tornet", "korsning", "korsningen", "riket", "platsen", "punkten", "galten", "vandraren", "ponnyn", "bocken", "kaninen", "stopet", "hålet", "vaken", "viken", "tjärn", "torp", "huvudet", "hus", "katten", "ormen", "skräddaren"];
            }

            if (value === "vaxt") {
                suffix = ["anis", "apel", "ax", "bark", "beta", "bjärt", "blad", "blom", "blomster", "bräken", "buske", "bär", "böna", "cikoria", "dill", "ek", "en", "fibbla", "fläder", "frö", "glädje", "gran", "gäck", "hallon", "hassel", "hatt", "havre", "hirs", "hjortron", "klubba", "klöver", "knöl", "kocka", "koriander", "korn", "kott", "kotte", "krusbär", "krydda", "kummin", "kål", "körvel", "lav", "lilja", "lin", "lingon", "lök", "löv", "meliss", "morot", "mossa", "murkla", "mynta", "målla", "måra", "nate", "nässla", "peppar", "päron", "rabarber", "regn", "ris", "rot", "råg", "räfsa", "rättika", "sallad", "sippa", "själke", "skatta", "skimra", "skivling", "skräppa", "sköna", "slån", "smultron", "snår", "sopp", "sporre", "starr", "sticka", "stjärna", "storm", "svamp", "timjan", "torn", "tryffel", "tunga", "tuva", "törn", "törne", "ull", "vallmo", "vass", "vete", "vide", "viva", "väv", "ärt", "ärtskocka", "ört"];
            }
        }
        if (selectedLanguage === "English") {
            if (value === "by") {
                suffix = ["Alder", "anger", "back", "mount", "blut", "shed ", "sheddy ", "castle", "bottom", "steep", "bridge", "mill", "well", "village", "brook", "valley", "haze ", "oath", "fjord ", "mountain ", "rapids", "frost ", "field", "gang", "mouth ", "gard ", "gold", "farm ", "haga ", "hall", "hammer ", "port ", "harg ", "heath", "home", "holm ", "holt ", "hult", "hall", "high ", "lodge ", "rock", "cliff ", "hill ", "mill", "spring ", "market", "live ", "lid ", "ling ", "grove ", "luck ", "leaf ", "ground ", "bog", "monje ", "clime", "isthmus ", "om", "pass", "row", "room ", "rup ", "ryd ", "grubbed ", "sala ", "skog ", "forest ", "sorrow ", "sta", "stein", "stone ", "way", "log ", "strait", "tegn ", "thing", "tarn ", "thwart ", "top", "croft ", "swamp ", "tun", "tune ", "um ", "calf", "ley", "vi ", "bay", "wind ", "virja ", "view ", "a", "field ", "ridge ", "river", "Meadow"];
            }
            if (value === "vardshus") {
                suffix = [" hall", "burrow", "den", "sty", "tavern", "hash house", "pig", "bear", "cottage", " home", "hole", "ice hole", "gulf", "tarn", "croft", "mountain", "head", "tower", "crossing", "realm", "place", "point", "boar", "wanderer", "ponny", "buck", "rabbit", "pint", "head", "house", "cat", "snake", "tailor"];
            }

            if (value === "vaxt") {
                suffix = ["anise", "apple", "spike", "bark", "beet", "brightly", "leaf", "bloom", "flower", "bracken", "Bush", "berry", "bean", "chicory", "dill", "oak", "cade", "thistle", "elder berry", "seed", "Joy", "pine", "elusive", "raspberry", "hazel", "hat", "oat", "millet", "cloudberry", "club", "clover", "tuber", "choke", "coriander", "barley", "cone", "cone", "gooseberry", "spice", "cumin", "cabbage", "chervil", "lichen", "Lily", "flax", "lingon", "onion", "leaf", "melisma", "Carrot", "moss", "morel", "mint", "orache", "straw", "nate", "nettle", "pepper", "pear", "rhubarb", "rain", "root", "rye", "rake", "radish", "salad", "anemone", "stalk", "gleam", "agaric", "cocklebur", "beauty", "sloe", "strawberry", "thicket", "bovinus", "Spur", "sting", "star", "storm", "fungus", "thyme", "thorn", "truffle", "tongue", "tuft", "wool", "poppy", "reed", "wheat", "willow", "viva", "weave", "pea", "herb"];
            }
        }

        return " " + (suffix[randomNumber(suffix.length) - 1]);
    }

    function ResetNamePeopleResultsSwedish() {
        $("#namePeopleResults").html("<br><ul class=\"list-group\"><li class=\"list-group-item\">Tryck på en knapp för att slumpa ett namn.</li><ul>");
    }
    function ResetNamePeopleResultsEnglish() {
        $("#namePeopleResults").html("<br><ul class=\"list-group\"><li class=\"list-group-item\">Press a button to generate a name.</li><ul>");
    }

    function ResetNameThingsResultsSwedish() {
        $("#nameThingsResults").html("<br><ul class=\"list-group\"><li class=\"list-group-item\">Tryck på en knapp för att slumpa ett namn. Du kan behöva fixa till namnen i efterhand.</li><ul>");
    }
    function ResetNameThingsResultsEnglish() {
        $("#nameThingsResults").html("<br><ul class=\"list-group\"><li class=\"list-group-item\">Press a button to generate a name. You may have to fix the names after generation.</li><ul>");
    }

});
