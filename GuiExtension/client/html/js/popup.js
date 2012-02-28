
$(function () {
    $('#message').hide();
    dataString = jQuery.param.querystring(window.location.href);
    $.ajax({
        type: "GET",
        url: "http://TridionDev2011:8001/Tridion2011ServiceStack/api/tridionItem",
        data: dataString,
        dataType: "jsonp",
        success: function (data) {
            $(document).ready(function () {
                $("#suspect").text(data.lastModifiedBy);
                $('#message').show();
            });
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    });
}); 