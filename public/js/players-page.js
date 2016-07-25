
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

})(this);
