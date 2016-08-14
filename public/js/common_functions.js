var nav_bar_height = 0;


var loadPage = function(page_name) {

    var page_html_path = "public/pages/" + page_name + ".html";
    var page_js_path = "public/js/" + page_name + ".js";

    $("#content").load(page_html_path);

    $.ajax({
        url: page_js_path,
        dataType: "script",
        success: function(data) {
        }
    });

}


var hideNavBar = function() {
    if ($("#nav-bar").css('display') === "none") {
        return ;
    }
    nav_bar_height = $("#nav-bar").height();
    $("#content").css('padding-top', 0);
    var new_height = $("#content").height() + nav_bar_height;
    $("#content").css('height', new_height);
    $("#nav-bar").css('display', 'none');
}


var showNavBar = function() {
    if ($("#nav-bar").css('display') !== "none") {
        return ;
    }
    nav_bar_height = $("#nav-bar").height();
    $("#content").css('padding-top', nav_bar_height);
    var new_height = $("#content").height() - nav_bar_height;
    $("#content").css('height', new_height);
    $("#nav-bar").css('display', 'block');
}
