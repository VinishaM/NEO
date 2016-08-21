$(document).ready( function() {
    $(".active").removeClass("active");
    var next= $(".content").attr("id");
    $("#"+next+"1").addClass("active");
    });