$(document).ready(function () {

    //flip collapse indicator when clicked
    $('.accordian-toggle').click(function (e) {
        var i = $(this).find("span.BDM-arrow");
        if (i.hasClass("glyphicon-chevron-up")) {
            i.removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
        }
        else {
            i.removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
        }
    });

    //Show modal to confirm sending message
    $('#sendButton').click(function (e) {
        $('#confirmation-modal').modal('toggle');
    })
    //Remove modal and if sent, clear form
    $('#send').click(function (e) {
        /*
            message sending code here 
        */
        $('#confirmation-modal').modal('toggle');
        $('#contact-form :input').val("");
    });



})