var loadPage = function(page_name) {

    var page_html_path = "public/pages/" + page_name + ".html";
    var page_js_path = "public/js/" + page_name + ".js";

    $("#app-wrapper").load(page_html_path);

    $.getScript(page_js_path, function() {

    });
}
