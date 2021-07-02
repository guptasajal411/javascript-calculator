$("button").mousedown(function(){
    $(this).addClass("pressed");
});

$("button").mouseup(function(){
    $(this).removeClass("pressed");
});

$("body").keydown(function(event){
    console.log(event.key)
    switch (event.key) {
        case "0":
            $("#0").addClass("pressed");
            break;
        case "1":
            $("#1").addClass("pressed");
            break;
        case "2":
            $("#2").addClass("pressed");
            break;
        case "3":
            $("#3").addClass("pressed");
            break;
        case "4":
            $("#4").addClass("pressed");
            break;
        case "5":
            $("#5").addClass("pressed");
            break;
        case "6":
            $("#6").addClass("pressed");
            break;
        case "7":
            $("#7").addClass("pressed");
            break;
        case "8":
            $("#8").addClass("pressed");
            break;
        case "9":
            $("#9").addClass("pressed");
            break;
        case "Delete":
            $("#del").addClass("pressed");
            break;
        case "+":
            $("#plus").addClass("pressed");
            break;
        case "-":
            $("#-").addClass("pressed");
            break;
        case "*":
            $("#x").addClass("pressed");
            break;
        case "/":
            $("#divide").addClass("pressed");
            break;
        case ".":
            $("#decimal").addClass("pressed");
            break;
        case "Enter":
            $("#equal").addClass("pressed");
            break;
        case "r":
            $("#reset").addClass("pressed");
            break;
        case "R":
            $("#reset").addClass("pressed");
            break;
        default:
            break;
    }
})

$("body").keyup(function(event){
    console.log(event.key)
    switch (event.key) {
        case "0":
            $("#0").removeClass("pressed");
            break;
        case "1":
            $("#1").removeClass("pressed");
            break;
        case "2":
            $("#2").removeClass("pressed");
            break;
        case "3":
            $("#3").removeClass("pressed");
            break;
        case "4":
            $("#4").removeClass("pressed");
            break;
        case "5":
            $("#5").removeClass("pressed");
            break;
        case "6":
            $("#6").removeClass("pressed");
            break;
        case "7":
            $("#7").removeClass("pressed");
            break;
        case "8":
            $("#8").removeClass("pressed");
            break;
        case "9":
            $("#9").removeClass("pressed");
            break;
        case "Delete":
            $("#del").removeClass("pressed");
            break;
        case "+":
            $("#plus").removeClass("pressed");
            break;
        case "-":
            $("#-").removeClass("pressed");
            break;
        case "*":
            $("#x").removeClass("pressed");
            break;
        case "/":
            $("#divide").removeClass("pressed");
            break;
        case ".":
            $("#decimal").removeClass("pressed");
            break;
        case "Enter":
            $("#equal").removeClass("pressed");
            break;
        case "r":
            $("#reset").removeClass("pressed");
            break;
        case "R":
            $("#reset").removeClass("pressed");
            break;
        default:
            break;
    }
})
