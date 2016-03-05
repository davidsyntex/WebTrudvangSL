$(document).ready(function () {
    function getRandomNumber(max) {
        return Math.floor((Math.random() * max) + 1);
    }

    $("#navbar").load("http://davidsyntex.github.io/WebTrudvangSL/home/navbar.html", function () {
        $.getScript('http://davidsyntex.github.io/WebTrudvangSL/js/language.js', function () {
            //LoadLanguages('http://davidsyntex.github.io/WebTrudvangSL/game/tc/json/language.json');
        });
    });

    $("#initButtonSortAscending").click(function () {
        Participants.sort(SortNumbersAscending);
        displayParticipants();
    });

    $("#initButtonSortDescending").click(function () {
        Participants.sort(SortNumbersDescending);
        displayParticipants();
    });

    var ParticipantCounter = 0;

    var Participant = function (name, initiative) {
        this.id = ParticipantCounter++;
        this.name = name;
        this.initiative = initiative;
    };

    var Participants = [];

/*    Participants.push(new Participant("Troll 3", 10));
    Participants.push(new Participant("Troll 2", 25));
    Participants.push(new Participant("Troll 1", 20));*/

    Participants.sort(SortNumbersDescending);
    displayParticipants();

    function SortNumbersAscending(a, b) {

        if (a.initiative > b.initiative) {
            return 1;
        }
        if (a.initiative < b.initiative) {
            return -1;
        }
        // a must be equal to b
        return 0;

    }

    function SortNumbersDescending(a, b) {

        if (a.initiative > b.initiative) {
            return -1;
        }
        if (a.initiative < b.initiative) {
            return 1;
        }
        // a must be equal to b
        return 0;

    }


    function displayParticipants() {
        var tbody = $("#initTable").find("tbody");
        tbody.html("");
        Participants.forEach(function (item, index, array) {

            console.log(item, index);
            tbody.append('<tr id="Participant' + item.id + '"><td><div class="form-group form-inline"><input type="number" class="form-control" value="' + item.initiative + '"></div></td><td><div class="form-group form-inline"><input type="text" class="form-control" value="' + item.name + '"></div></td><td><button type="button" class="btn btn-danger" role="button" aria-label="Ta bort"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></td></tr>');

            var id = $("#Participant" + item.id);

            id.find("input").change(function () {
                item.initiative = parseInt(id.find("input").val());
                Participants.sort(SortNumbersAscending);
            });

            id.find("input:text").change(function () {
                item.name = id.find("input:text").val();
            });

            id.find("button").click(function () {
                Participants.splice(index, 1);
                displayParticipants();
            });
        });
    }


    $("#initAddParticipantButton").click(function () {
        var name = $("#initAddParticipantName").val();
        var initiative = parseInt($("#initAddParticipantInitiative").val());
        Participants.push(new Participant(name, initiative));
        displayParticipants();
    });
});
