$(document).ready(function () {
    $("#initAddParticipantPopCorn").collapse("show");
    InitializeHideableButtons();
    HideInitTableNormal();
    HideInitTablePopCorn();
    var type = "popcorn";

    $("#navbar").load("http://davidsyntex.github.io/WebTrudvangSL/home/navbar.html", function () {
        $.getScript('http://davidsyntex.github.io/WebTrudvangSL/js/language.js', function () {
            //LoadLanguages('http://davidsyntex.github.io/WebTrudvangSL/game/tc/json/language.json');
        });
    });
    $("#siteFooter").load("http://davidsyntex.github.io/WebTrudvangSL/home/footer.html", function () {
    });

    function InitializeHideableButtons() {
        $('#initButtonStartNewRound').collapse({toggle: false});
        $('#initButtonSortAscending').collapse({toggle: false});
        $('#initButtonSortDescending').collapse({toggle: false});
        $('#initButtonNextParticipant').collapse({toggle: false});
        $('#initButtonIncreaseEscalationDie').collapse({toggle: false});
        $('#initButtonDecreaseEscalationDie').collapse({toggle: false});
        $('#initTableHeading').collapse({toggle: false});
        $('#initInformation').collapse({toggle: false});
        $('#initTableNormal').collapse({toggle: false});
        $('#initTablePopCorn').collapse({toggle: false});
        $("#initAddParticipantPopCorn").collapse({toggle: false});
        $("#initAddParticipantNormal").collapse({toggle: false});
    }

    function HideInitTableNormal() {
        $("#initTableHeading").collapse('hide');
        $("#initInformation").collapse("hide");
        $("#initTableNormal").collapse("hide");
    }

    function HideInitTableInformation() {
        $("#initButtonStartNewRound").collapse("hide");
        $("#initButtonSortAscending").collapse("hide");
        $("#initButtonSortDescending").collapse("hide");
        $("#initButtonNextParticipant").collapse("hide");
        $("#initButtonIncreaseEscalationDie").collapse("hide");
        $("#initButtonDecreaseEscalationDie").collapse("hide");
    }

    function ShowInitTableInformation() {
        $("#initButtonStartNewRound").collapse("show");
        $("#initButtonSortAscending").collapse("show");
        $("#initButtonSortDescending").collapse("show");
        $("#initButtonNextParticipant").collapse("hide");
        $("#initButtonIncreaseEscalationDie").collapse("show");
        $("#initButtonDecreaseEscalationDie").collapse("show");
    }

    function ShowInitTableInformationPopCorn() {
        $("#initButtonSortAscending").collapse("show");
        $("#initButtonSortDescending").collapse("show");
        $("#initButtonStartNewRound").collapse("show");
        $("#initButtonNextParticipant").collapse("hide");
        $("#initButtonIncreaseEscalationDie").collapse("show");
        $("#initButtonDecreaseEscalationDie").collapse("show");
    }

    function HideInitTablePopCorn() {
        $("#initTableHeading").collapse('hide');
        $("#initTablePopCorn").collapse('hide');
        $("#initInformation").collapse("hide");
    }

    function ShowInitTableNormal() {
        $("#initTableHeading").collapse("show");
        $("#initTableNormal").collapse("show");
    }

    function ShowInitTablePopCorn() {
        $("#initTableHeading").collapse("show");
        $("#initTablePopCorn").collapse("show");
    }

    function InitiativeTypeChange() {
        var checked = $("#initType").find("input:radio:checked");

        if (checked.val() === "normal") {
            $("#initAddParticipantNormal").collapse("show");
            $("#initAddParticipantPopCorn").collapse("hide");
            $("#initButtonNextParticipant").removeClass("disabled");
        }
        if (checked.val() === "popcorn") {
            $("#initAddParticipantPopCorn").collapse("show");
            $("#initAddParticipantNormal").collapse("hide");
            $("#initButtonNextParticipant").addClass("disabled");
        }

        HideInitTableNormal();
        HideInitTablePopCorn();
        HideInitTableInformation();
        type = checked.val();
        Participants = [];
    }

    $("#initType").find("input:radio").change(function () {
        InitiativeTypeChange();
    });

    function SortAscending() {
        if (type === "normal") {
            Participants.sort(ComparatorNumberAscending);
            displayParticipantsNormal();
        }
        if (type === "popcorn") {
            Participants.sort(ComparatorStringsAscending);
            displayParticipantsPopCorn();
        }
    }

    function SortDescending() {
        if (type === "normal") {
            Participants.sort(ComparatorNumbersDescending);
            displayParticipantsNormal();
        }
        if (type === "popcorn") {
            Participants.sort(ComparatorStringsDescending);
            displayParticipantsPopCorn();
        }
    }

    $("#initButtonSortAscending").click(function () {
        SortAscending();
    });

    $("#initButtonSortDescending").click(function () {
        SortDescending();
    });

    function ResumeRound() {
        if (type === "normal") {
            ShowInitTableNormal();
            ShowInitTableInformation();
            displayParticipantsNormal();
            NextParticipant();
        }

        if (type === "popcorn") {
            ShowInitTablePopCorn();
            ShowInitTableInformationPopCorn();
            displayParticipantsPopCorn();
        }

        if (roundCounter > 0) {
            $("#initInformation").collapse("show");
            $("#initRoundCounter").html(roundCounter.toString());
            $("#initEscalationDie").html(escalationDieCounter.toString());
            $("#initParticipantsLeft").html(ParticipantsLeftInRound);

            if (type === "normal") {
                $("#initButtonNextParticipant").collapse("show");
            }
            if (type === "popcorn") {
                $("#initButtonStartNewRound").collapse("hide");
            }
        }
    }

    function StartNewRound() {
        $("#initInformation").collapse("show");

        roundCounter++;
        escalationDieCounter++;
        $("#initRoundCounter").html(roundCounter.toString());
        $("#initEscalationDie").html(escalationDieCounter.toString());

        if (type === "normal") {
            ParticipantsInRound = Participants.slice(0);
            $("#initButtonNextParticipant").collapse("show");
            ParticipantsLeftInRound = ParticipantsInRound.length;
            $("#initParticipantsLeft").html(ParticipantsLeftInRound);
            displayParticipantsNormal();
            NextParticipant();
        }
        if (type === "popcorn") {
            $("#initButtonStartNewRound").collapse("hide");

            Participants.forEach(function (item) {
                item.acted = false;
            });
            ParticipantsInRound = Participants.slice(0);
            ParticipantsLeftInRound = ParticipantsInRound.length;
            $("#initParticipantsLeft").html(ParticipantsLeftInRound);
            displayParticipantsPopCorn();
        }
    }

    function NextParticipant() {
        if (roundCounter <= 0) {
            return;
        }
        Participants.forEach(function (item) {
            $("#Participant" + item.id).removeClass("success");
        });

        if (ParticipantsInRound.length > 0) {
            var activeParticipant = "#Participant" + ParticipantsInRound.shift().id;
        }

        $("#initParticipantsLeft").html(ParticipantsInRound.length);
        $(activeParticipant).addClass("success");
        if (ParticipantsInRound.length === 0) {
            $("#initButtonNextParticipant").collapse("hide");
        }
    }

    $("#initButtonStartNewRound").click(function () {
        StartNewRound();
    });

    $("#initButtonNextParticipant").click(function () {
        NextParticipant();
    });

    var ParticipantCounter = 0;
    var roundCounter = 0;
    var escalationDieCounter = -1;
    var Participants = [];
    var ParticipantsInRound = [];
    var ParticipantsLeftInRound = 0;

    var ParticipantNormal = function (name, initiative, hp, maxHp) {
        this.id = ParticipantCounter++;
        this.name = name;
        this.initiative = initiative;
        this.hp = hp;
        this.maxHp = maxHp;
        this.bloodied = false;
    };

    var ParticipantPopCorn = function (name, team, hp, maxHp) {
        this.id = ParticipantCounter++;
        this.name = name;
        this.team = team;
        this.acted = false;
        this.hp = hp;
        this.maxHp = maxHp;
        this.bloodied = false;
    };

    function ComparatorNumberAscending(a, b) {
        if (a.initiative > b.initiative) {

            return 1;
        }
        if (a.initiative < b.initiative) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }

    function ComparatorNumbersDescending(a, b) {
        if (a.initiative > b.initiative) {
            return -1;
        }
        if (a.initiative < b.initiative) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }

    function ComparatorStringsAscending(a, b) {
        if (a.team > b.team) {
            return 1;
        }
        if (a.team < b.team) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }

    function ComparatorStringsDescending(a, b) {
        if (a.team > b.team) {
            return -1;
        }
        if (a.team < b.team) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }

    function CreateHTMLTableString(item, callback) {
        var bloodiedSpanClass;
        var bloodiedButtonClass;
        var tbody;
        var htmlString = "";

        if (type === "normal") {

            bloodiedButtonClass = "";
            bloodiedSpanClass = "";

            if (item.bloodied) {
                bloodiedSpanClass += "glyphicon";
                bloodiedSpanClass += " glyphicon-tint";
                bloodiedButtonClass += " active";
                bloodiedButtonClass += " btn-warning";
            }

            if (!item.bloodied) {
                bloodiedSpanClass += "glyphicon";
                bloodiedSpanClass += " glyphicon-heart";
            }

            tbody = $("#initTableNormal").find("tbody");

            htmlString += '<tr id="Participant' + item.id + '">';

            htmlString += '<td><div class="form-group form-inline ziox-initiative-form-group">';
            htmlString += '<input type="number" class="form-control" value="' + item.initiative + '"></div></td>';

            htmlString += '<td><div class="form-group form-inline ziox-initiative-form-group">';
            htmlString += '<input type="text" class="form-control" value="' + item.name + '"></div></td>';

            htmlString += '<td><div class="form-group form-inline ziox-initiative-form-group"><input id="HP' + item.id + '" type="number" class="form-control" value="' + item.hp + '"></div></td>';

            htmlString += '<td><div class="form-group form-inline ziox-initiative-form-group"><p class="form-control-static">' + item.maxHp + '</p></div></td>';//MaxHP

            htmlString += '<td><div class="form-group form-inline ziox-initiative-form-group">';
            htmlString += '<button id="Bloodied' + item.id + '" type="button" class="btn ' + bloodiedButtonClass + '" data-toggle="button" aria-pressed="' + item.bloodied + '" aria-label="Has acted">';
            htmlString += '<span class="' + bloodiedSpanClass + '"></span></button>';
            htmlString += '</div></td>'; //Bloodied

            htmlString += '<td><button id="Remove' + item.id + '" type="button" class="btn btn-danger" role="button" aria-label="Ta bort">';
            htmlString += '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></td>';

            htmlString += '</tr>';

            console.log(htmlString);
            tbody.append(htmlString);
        }

        if (type === "popcorn") {
            tbody = $("#initTablePopCorn").find("tbody");

            var actSpanClass = "";
            var actButtonClass = "";
            var actDisabled = "";
            var teamColor = "";
            bloodiedButtonClass = "";
            bloodiedSpanClass = "";

            if (roundCounter === 0) {
                actDisabled = 'disabled="disabled"';
            }

            if (item.team === "Allierad") {
                teamColor = "success"
            }
            if (item.team === "Fiende") {
                teamColor = "danger"
            }
            if (item.acted) {
                actSpanClass += "glyphicon";
                actSpanClass += " glyphicon-ok";
                actSpanClass += " active";
                actButtonClass += " btn-" + teamColor;
            }
            if (!item.acted) {
                actSpanClass += "glyphicon";
                actSpanClass += " glyphicon-unchecked";
                actButtonClass += " btn-" + teamColor;
            }
            if (item.bloodied) {
                bloodiedSpanClass += "glyphicon";
                bloodiedSpanClass += " glyphicon-tint";
                bloodiedButtonClass += " active";
                bloodiedButtonClass += " btn-warning";
            }
            if (!item.bloodied) {
                bloodiedSpanClass += "glyphicon";
                bloodiedSpanClass += " glyphicon-heart";
                bloodiedButtonClass += " btn-" + teamColor;
            }
            htmlString += '<tr id="Participant' + item.id + '" class="' + teamColor + '">';
            htmlString += '<td><div class="form-group form-inline ziox-initiative-form-group">';
            htmlString += '<button id="Act' + item.id + '" type="button" class="btn ' + actButtonClass + '" data-toggle="button" aria-pressed="' + item.acted + '" aria-label="Has acted" ' + actDisabled + '>';
            htmlString += '<span class="' + actSpanClass + '"></span></button>';
            htmlString += '</div></td>';
            htmlString += '<td><div class="form-group form-inline ziox-initiative-form-group"><p class="form-control-static">' + item.team + '</p></div></td>';
            htmlString += '<td><div class="form-group form-inline ziox-initiative-form-group"><input type="text" class="form-control" value="' + item.name + '"></div></td>';

            htmlString += '<td><div class="form-group form-inline ziox-initiative-form-group"><input id="HP' + item.id + '" type="number" class="form-control" value="' + item.hp + '"></div></td>';
            htmlString += '<td><div class="form-group form-inline ziox-initiative-form-group"><p class="form-control-static">' + item.maxHp + '</p></div></td>';//MaxHP
            htmlString += '<td><div class="form-group form-inline ziox-initiative-form-group">';
            htmlString += '<button id="Bloodied' + item.id + '" type="button" class="btn ' + bloodiedButtonClass + '" data-toggle="button" aria-pressed="' + item.bloodied + '" aria-label="Has acted">';
            htmlString += '<span class="' + bloodiedSpanClass + '"></span></button>';
            htmlString += '</div></td>'; //Bloodied
            htmlString += '<td><button id="Remove' + item.id + '" type="button" class="btn btn-danger" role="button" aria-label="Ta bort"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></td>';
            htmlString += '</tr>';
            console.log(htmlString);
            tbody.append(htmlString);
        }

        callback();
    }

    function displayParticipantsNormal() {
        $("#initTableNormal").find("tbody").html("");
        Participants.forEach(function (item, index) {
            CreateHTMLTableString(item, function () {

                var id = $("#Participant" + item.id);

                id.find("input").change(function () {
                    if (isNaN(parseInt(id.find("input").val()))) {
                        item.initiative = 0;
                    }
                    else {
                        item.initiative = parseInt(id.find("input").val());
                    }
                });

                id.find("input:text").change(function () {
                    item.name = id.find("input:text").val();
                });

                id.find("#HP" + item.id).change(function () {
                    if (isNaN(parseInt(id.find("#HP" + item.id).val()))) {
                        item.hp = 0;
                    }
                    else {
                        item.hp = parseInt(id.find("#HP" + item.id).val());

                        if (item.hp <= (item.maxHp / 2)) {
                            item.bloodied = true;
                        }
                        if (item.hp > (item.maxHp / 2)) {
                            item.bloodied = false;
                        }
                    }
                    displayParticipantsNormal();
                });

                id.find("#Bloodied" + item.id).click(function () {
                    console.log("Ändrar Bloodied");
                    item.bloodied = !item.bloodied;
                    displayParticipantsNormal();
                });


                id.find("#Remove" + item.id).click(function () {
                    Participants.splice(index, 1);
                    if (Participants.length === 0) {
                        HideInitTableNormal();
                        HideInitTableInformation();
                        roundCounter = 0;
                        escalationDieCounter = -1;
                    }
                    ParticipantsLeftInRound--;
                    $("#initParticipantsLeft").html(ParticipantsLeftInRound);
                    if (ParticipantsLeftInRound === 0) {
                        $("#initButtonStartNewRound").collapse("show");
                    }
                    displayParticipantsNormal();
                });
            });
        });
    }

    function displayParticipantsPopCorn() {
        $("#initTablePopCorn").find("tbody").html("");
        Participants.forEach(function (item, index) {
            CreateHTMLTableString(item, function () {

                console.log("Running callback");
                var id = $("#Participant" + item.id);

                id.find("input:text").change(function () {
                    console.log("Ändrar namn");
                    item.name = id.find("input:text").val();
                });

                id.find("#Act" + item.id).click(function () {
                    console.log("Ändrar Acted");
                    item.acted = !item.acted;

                    ParticipantsLeftInRound--;
                    $("#initParticipantsLeft").html(ParticipantsLeftInRound);
                    if (ParticipantsLeftInRound === 0) {
                        $("#initButtonStartNewRound").collapse("show");
                    }
                    displayParticipantsPopCorn();
                });


                id.find("#HP" + item.id).change(function () {
                    if (isNaN(parseInt(id.find("#HP" + item.id).val()))) {
                        item.hp = 0;
                    }
                    else {
                        item.hp = parseInt(id.find("#HP" + item.id).val());

                        if (item.hp <= (item.maxHp / 2)) {
                            item.bloodied = true;
                        }
                        if (item.hp > (item.maxHp / 2)) {
                            item.bloodied = false;
                        }
                    }
                    displayParticipantsPopCorn();
                });

                id.find("#Bloodied" + item.id).click(function () {
                    console.log("Ändrar Bloodied");
                    item.bloodied = !item.bloodied;
                    displayParticipantsPopCorn();
                });


                id.find("#Remove" + item.id).click(function () {
                    Participants.splice(index, 1);
                    if (Participants.length === 0) {
                        HideInitTablePopCorn();
                        HideInitTableInformation();
                        roundCounter = 0;
                        escalationDieCounter = -1;
                    }
                    ParticipantsLeftInRound--;
                    $("#initParticipantsLeft").html(ParticipantsLeftInRound);
                    if (ParticipantsLeftInRound === 0) {
                        $("#initButtonStartNewRound").collapse("show");
                    }
                    displayParticipantsPopCorn();
                });
            });
        });
    }

    $("#initAddParticipantNormalButton").click(function () {
        var name = $("#initAddParticipantNormalName").val();
        var initiativeInput = $("#initAddParticipantNormalInitiative");
        var initiative = 0;
        if (!isNaN(parseInt(initiativeInput.val()))) {
            initiative = parseInt(initiativeInput.val());
        }
        var maxHpInput = $("#initAddParticipantNormalMaxHP");
        var maxHp = 0;
        if (!isNaN(parseInt(maxHpInput.val()))) {
            maxHp = parseInt(maxHpInput.val());
        }
        Participants.push(new ParticipantNormal(name, initiative,maxHp,maxHp));
        ShowInitTableNormal();
        ShowInitTableInformation();
        displayParticipantsNormal();
    });

    $("#initAddParticipantPopCornButton").click(function () {
        var name = $("#initAddParticipantPopCornName").val();
        var team = $("#initAddParticipantPopCornTeam").find("option:selected").val();
        var maxHpInput = $("#initAddParticipantPopCornMaxHP");
        var maxHp = 0;
        if (!isNaN(parseInt(maxHpInput.val()))) {
            maxHp = parseInt(maxHpInput.val());
        }
        Participants.push(new ParticipantPopCorn(name, team, maxHp, maxHp));
        ShowInitTablePopCorn();
        ShowInitTableInformation();
        displayParticipantsPopCorn();
    });

    var jsonStorage = "";

    $("#initButtonIncreaseEscalationDie").click(function () {
        escalationDieCounter++;
        $("#initEscalationDie").html(escalationDieCounter.toString());
        displayParticipantsPopCorn();
    });
    $("#initButtonDecreaseEscalationDie").click(function () {
        escalationDieCounter--;
        $("#initEscalationDie").html(escalationDieCounter.toString());
        displayParticipantsPopCorn();
    });

    var Initiative = function (type, roundCounter, escalationDieCounter, ParticipantCounter, ParticipantsInRound, ParticipantsLeftInRound, Participants) {
        this.type = type;
        this.roundCounter = roundCounter;
        this.escalationDieCounter = escalationDieCounter;
        this.ParticipantCounter = ParticipantCounter;
        this.ParticipantsInRound = ParticipantsInRound;
        this.ParticipantsLeftInRound = ParticipantsLeftInRound;
        this.Participants = Participants;
    };

    function ImportFromJSON() {
        var initTypeNormal;
        var initTypePopCorn;
        escalationDieCounter--;
        $("#initEscalationDie").html(escalationDieCounter.toString());
        var initiative = JSON.parse($("#initImportExportTextbox").val());
        type = initiative.type;
        roundCounter = initiative.roundCounter;
        escalationDieCounter = initiative.escalationDieCounter;
        ParticipantCounter = initiative.ParticipantCounter;
        ParticipantsInRound = initiative.ParticipantsInRound;
        ParticipantsLeftInRound = initiative.ParticipantsLeftInRound;
        Participants = initiative.Participants;

        if (type === "normal") {
            $("#initAddParticipantNormal").collapse("show");
            $("#initAddParticipantPopCorn").collapse("hide");
            $("#initButtonNextParticipant").removeClass("disabled");

            initTypePopCorn = $("#initTypePopCorn");
            initTypeNormal = $("#initTypeNormal");
            initTypePopCorn.removeClass("active");
            initTypeNormal.addClass("active");
            initTypePopCorn.html('<input type="radio" name="initOptions" value="popcorn" autocomplete="off">PopCorn');
            initTypeNormal.html('<input type="radio" name="initOptions" value="normal" autocomplete="off" checked>Normal');

        }
        if (type === "popcorn") {
            $("#initAddParticipantPopCorn").collapse("show");
            $("#initAddParticipantNormal").collapse("hide");
            console.log("IMPORT:POPCORN: Döljer #initAddParticipantNormal");
            $("#initButtonNextParticipant").addClass("disabled");
            initTypePopCorn = $("#initTypePopCorn");
            initTypeNormal = $("#initTypeNormal");
            initTypeNormal.removeClass("active");
            initTypePopCorn.addClass("active");
            initTypePopCorn.html('<input type="radio" name="initOptions" value="popcorn" autocomplete="off" checked>PopCorn');
            initTypeNormal.html('<input type="radio" name="initOptions" value="normal" autocomplete="off">Normal');
        }

        ResumeRound();
    }

    function ExportToJSON() {
        var initiative = new Initiative(type, roundCounter, escalationDieCounter, ParticipantCounter, ParticipantsInRound, ParticipantsLeftInRound, Participants);
        console.log(JSON.stringify(initiative));
        jsonStorage = JSON.stringify(initiative);
        $("#initImportExportTextbox").val(jsonStorage);
    }

    $("#initButtonExport").click(function () {
        ExportToJSON();

        /*// Create Base64 Object
         var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

         // Define the string
         var string = jsonStorage;

         // Encode the String
         var encodedString = Base64.encode(string);
         console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

         // Decode the String
         var decodedString = Base64.decode(encodedString);
         console.log(decodedString); // Outputs: "Hello World!"*/

    });
    $("#initButtonImport").click(function () {
        ImportFromJSON();
        // [{"id":0,"name":"asdad","team":"Allierad","acted":false},{"id":1,"name":"asdad","team":"Allierad","acted":false},{"id":2,"name":"asdad","team":"Fiende","acted":false},{"id":3,"name":"asdad","team":"Fiende","acted":false}]

        //POP {"type":"popcorn","roundCounter":2,"escalationDieCounter":1,"ParticipantCounter":4,"ParticipantsInRound":[{"id":0,"name":"asd","team":"Allierad","acted":true},{"id":1,"name":"asd","team":"Allierad","acted":false},{"id":2,"name":"asd","team":"Fiende","acted":true},{"id":3,"name":"asd","team":"Fiende","acted":true}],"ParticipantsLeftInRound":1,"Participants":[{"id":0,"name":"asd","team":"Allierad","acted":true},{"id":1,"name":"asd","team":"Allierad","acted":false},{"id":2,"name":"asd","team":"Fiende","acted":true},{"id":3,"name":"asd","team":"Fiende","acted":true}]}

        //B64
        //POP eyJ0eXBlIjoicG9wY29ybiIsInJvdW5kQ291bnRlciI6MCwiZXNjYWxhdGlvbkRpZUNvdW50ZXIiOi0xLCJQYXJ0aWNpcGFudENvdW50ZXIiOjAsIlBhcnRpY2lwYW50c0luUm91bmQiOltdLCJQYXJ0aWNpcGFudHNMZWZ0SW5Sb3VuZCI6MCwiUGFydGljaXBhbnRzIjpbXX0=

        //NORM {"type":"normal","roundCounter":1,"escalationDieCounter":0,"ParticipantCounter":5,"ParticipantsInRound":[{"id":1,"name":"asd","initiative":11},{"id":3,"name":"asd","initiative":10}],"ParticipantsLeftInRound":5,"Participants":[{"id":4,"name":"asd","initiative":14},{"id":2,"name":"asd","initiative":13},{"id":0,"name":"asd","initiative":12},{"id":1,"name":"asd","initiative":11},{"id":3,"name":"asd","initiative":10}]}
    });
});
