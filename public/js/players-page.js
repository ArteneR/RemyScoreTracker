
(function(global) {

    global.toggleNewPlayerContainerHeight = function(delay) {
        $('#new-player-container').animate({
            height: "toggle"
        }, delay);
    }

    var defaultColor = "#ffffff";
    var players_list_no_record = '<tr id="players-list-no-record"><td>-</td><td>---</td><td>---</td><td>---</td><td>---</td></tr>';

    var addPlayerToList = function(index) {
        var html = '<tr id="players-list-row-' + index + '" class="' + (index % 2 == 0 ? 'table-even-row' : 'table-odd-row') + '"><td>' + (index + 1) +
                   '</td><td>' + global.players[index]['name'] +
                   '</td><td><div id="players-list-color-box" style="background-color: ' + global.players[index]['color'] + '"></div>' +
                   '</td><td>' + global.players[index]['score'] +
                   '</td><td class="players-list-remove-player" id="players-list-remove-player-' + index + '"><b>X</b></td><tr>';

        $("#players-list tbody").append(html);
        $("#players-list-no-record").css('display', 'none');
    };


    var redrawPlayersList = function() {
        var totalPlayers = global.players.length;
        if (totalPlayers === 0) {
            $("#players-list tbody").append(players_list_no_record);
            return;
        }
        var html = '';
        $("#players-list tbody").html('');
        for (var i = 0; i < totalPlayers; i++) {
            addPlayerToList(i);
            addRemoveListener(i);
        }
    };


    var addRemoveListener = function(index) {
        $("#players-list-remove-player-" + index).click(function() {
            if (confirm("Are you sure you want to remove player: '" + global.players[index]['name'] + "'?")) {
                // Delete player
                alert('Player has been removed');

                global.players.splice(index, 1);
                $("#players-list-row-" + index).remove();

                redrawPlayersList();
            }
        });
    };

    var nameAlreadyInList = function(nameToCheck) {
        var totalPlayers = global.players.length;
        for (var i = 0; i < totalPlayers; i++) {
            if (global.players[i]['name'] === nameToCheck) {
                return true;
            }
        }
        return false;
    };

    showNavBar();
    toggleNewPlayerContainerHeight(0);
    $("#players-list tbody").append(players_list_no_record);
    $("#page-title").html("Players");


    $("#back-button").click(function() {
        hideNavBar();
        loadPage("start-page");
    });

    $("#add-player-button").click(function() {
        toggleNewPlayerContainerHeight(500);
    });

    $("#circle-letter-new-player").click(function() {
        toggleNewPlayerContainerHeight(500);
    });

    $("#new-player-color").change(function() {
        var selectedColor = $("#new-player-color").val();
        $("#selected-color-preview").html('(' + selectedColor + ')');
    });

    $("#new-player-btn-cancel").click(function() {
        $("#new-player-name").val('');
        $("#new-player-color").val(defaultColor);
        $("#selected-color-preview").html('(' + defaultColor + ')');
        toggleNewPlayerContainerHeight(500);
    });

    $("#new-player-btn-ok").click(function() {
        // Check username length
        var newPlayerName = $("#new-player-name").val();
        var nameMaxCharacters = 20;
        if (newPlayerName.length > nameMaxCharacters) {
            alert('Please choose a name of at most ' + nameMaxCharacters + ' characters!');
            return;
        }
        if (newPlayerName.length < 1) {
            alert('Please choose a longer name!');
            return;
        }
        if (nameAlreadyInList(newPlayerName)) {
            alert('The name you have chosen is already taken!');
            return;
        }
        var newPlayer = {
                name: newPlayerName,
                color: $("#new-player-color").val(),
                score: 0
        };
        global.players.push(newPlayer);
        var playerIndex = global.players.length - 1;
        addPlayerToList(playerIndex);
        addRemoveListener(playerIndex);
        $("#new-player-name").val('');
        $("#new-player-color").val(defaultColor);
        $("#selected-color-preview").html('(' + defaultColor + ')');
    });

    $("#players-btn-proceed").click(function() {

        loadPage("game-page");

    });






})(this);
