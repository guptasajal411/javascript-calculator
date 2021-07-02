$("button").mousedown(function(){
    $(this).addClass("pressed");
});

$("button").mouseup(function(){
    $(this).removeClass("pressed");
});
