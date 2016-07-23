
(function(global) {

    showNavBar();
    $("#page-title").html("Players");

    $("#back-button").click(function() {

        hideNavBar();
        loadPage("start-page");

    });

    $("#add-player-button").click(function() {

        $('#new-player-container').animate({
            height: "toggle"
        }, 500);

    });


})(this);
