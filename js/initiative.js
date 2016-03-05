$(document).ready(function () {
    $("#navbar").load("http://davidsyntex.github.io/WebTrudvangSL/home/navbar.html", function () {
        $.getScript('http://davidsyntex.github.io/WebTrudvangSL/js/language.js', function () {
            //LoadLanguages('http://davidsyntex.github.io/WebTrudvangSL/game/tc/json/language.json');
        });
    });
    $("#siteFooter").load("http://davidsyntex.github.io/WebTrudvangSL/home/footer.html", function () {
    });

    $("#initButtonSortAscending").click(function () {
        Participants.sort(SortNumbersAscending);
        displayParticipants();
    });

    $("#initButtonSortDescending").click(function () {
        Participants.sort(SortNumbersDescending);
        displayParticipants();
    });
    $("#initButtonStartNewRound").click(function () {
        $("#initInformation").collapse("show");
        $("#initButtonNextParticipant").collapse("show");
        roundCounter++;
        $("#initRoundCounter").html(roundCounter.toString());
        ParticpantsInRound = Participants.slice(0);
        NextParticipant();
    });

    $("#initButtonNextParticipant").click(function () {
        NextParticipant();
    });


    function NextParticipant() {
        if (ParticpantsInRound.length === 0) {
            $("#initButtonNextParticipant").collapse("hide");
            return;
        }

        Participants.forEach(function (item, index, array){
            $("#Participant" + item.id).removeClass("success");
        });

        var activeParticipant = "#Participant"+ParticpantsInRound.shift().id;
        $(activeParticipant).addClass("success");
    }

    var ParticipantCounter = 0;
    var roundCounter = 0;

    var Participant = function (name, initiative) {
        this.id = ParticipantCounter++;
        this.name = name;
        this.initiative = initiative;
    };

    var Participants = [];
    var ParticpantsInRound = [];

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
        Participants.forEach(function (item, index) {
            tbody.append('<tr id="Participant' + item.id + '"><td><div class="form-group form-inline ziox-initiative-form-group"><input type="number" class="form-control" value="' + item.initiative + '"></div></td><td><div class="form-group form-inline ziox-initiative-form-group"><input type="text" class="form-control" value="' + item.name + '"></div></td><td><button type="button" class="btn btn-danger" role="button" aria-label="Ta bort"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></td></tr>');

            var id = $("#Participant" + item.id);

            id.find("input").change(function () {
                if (isNaN(parseInt(id.find("input").val()))) {
                    item.initiative = 0;
                }
                else {
                    item.initiative = parseInt(id.find("input").val());
                }

                //Participants.sort(SortNumbersAscending);
            });

            id.find("input:text").change(function () {
                item.name = id.find("input:text").val();
            });

            id.find("button").click(function () {
                Participants.splice(index, 1);
                if (Participants.length === 0) {
                    $("#initButtonStartNewRound").collapse("hide");
                    $("#initButtonSortAscending").collapse("hide");
                    $("#initButtonSortDescending").collapse("hide");
                    $("#initButtonNextParticipant").collapse("hide");
                    $("#initTableHeading").collapse("hide");
                    $("#initTable").collapse("hide");
                    $("#initInformation").collapse("hide");
                    roundCounter = 0;
                }
                displayParticipants();
            });
        });
    }


    $("#initAddParticipantButton").click(function () {
        var name = $("#initAddParticipantName").val();
        var initiativeInput = $("#initAddParticipantInitiative");
        var initiative = 0;
        if (!isNaN(parseInt(initiativeInput.val()))) {
            initiative = parseInt(initiativeInput.val());
        }

        Participants.push(new Participant(name, initiative));
        $("#initTableHeading").collapse("show");
        $("#initTable").collapse("show");
        $("#initButtonStartNewRound").collapse("show");
        $("#initButtonSortAscending").collapse("show");
        $("#initButtonSortDescending").collapse("show");

        displayParticipants();
    });
});
