$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
});

$("ul").on("click", ".delete", function() {
    $(this).parent().fadeOut(200, function() {
        $(this).remove();
    });
});

$("input[type='text']").keypress(function(e){
    var key = e.which;
    if (key === 13) {
        var newItem = $(this).val();
        $("ul").append("<li><span class=\"delete\"><i class='fa fa-trash'></i></span> " + newItem + "</li>");
        //delete
        $(this).val("");
    }
});

$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle(200);
});