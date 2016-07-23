
(function(global) {

    showNavBar();
    $("#page-title").html("Players");

    $("#back-button").click(function() {

        hideNavBar();
        loadPage("start-page");

    });

    $("#add-player-button").click(function() {
        alert("clicked");

        // @x-axis: 0;
        // @y-axis: -@new-player-container-height;
        // -ms-transform: translate(@x-axis, @y-axis); /* IE 9 */
        // -webkit-transform: translate(@x-axis, @y-axis); /* Safari */
        // transform: translate(@x-axis, @y-axis);
        // var x-axis = 0;
        // var y-axis = $("#new-player-container").height();
        // alert('y-axis: ' + y-axis);
        //
        // $('#players-container').animate({
        //   "transform": "translate(100px,100px)",
        //   "transition": "transform 500ms"
        // });
        $('#players-container').animate({
          "transform": 'translateX(100px) translateY(50px)'
        });
        alert("now");

    });


})(this);
