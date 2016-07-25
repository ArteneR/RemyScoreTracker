
(function(global) {

    global.toggleNewPlayerContainerHeight = function(delay) {
        $('#new-player-container').animate({
            height: "toggle"
        }, delay);
    }


    showNavBar();
    toggleNewPlayerContainerHeight(0);
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
        $("#new-player-color").val('#ffffff');
        toggleNewPlayerContainerHeight(500);
    });

    $("#new-player-btn-ok").click(function() {
        var newPlayerName = $("#new-player-name").val();
        var newPlayerColor = $("#new-player-color").val();

        alert(newPlayerName);
        alert(newPlayerColor);

    });

})(this);
