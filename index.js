$("button").mousedown(function(event){
    $(this).addClass("pressed");
});

$("button").mouseup(function(){
    $(this).removeClass("pressed");
});

$(".equal").click(function(){
    alert($("p").html());
})
$("body").keydown(function(event){
    // console.log(event.key)
    switch (event.key) {
        case "0":
            $("#0").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "0");
            break;
        case "1":
            $("#1").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "1");
            break;
        case "2":
            $("#2").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "2");
            break;
        case "3":
            $("#3").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "3");
            break;
        case "4":
            $("#4").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "4");
            break;
        case "5":
            $("#5").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "5");
            break;
        case "6":
            $("#6").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "6");
            break;
        case "7":
            $("#7").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "7");
            break;
        case "8":
            $("#8").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "8");
            break;
        case "9":
            $("#9").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "9");
            break;
        case "Delete":
            $("#del").addClass("pressed");
            break;
        case "+":
            $("#plus").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "+");
            break;
        case "-":
            $("#-").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "-");
            break;
        case "*":
            $("#x").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "*");
            break;
        case "/":
            $("#divide").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "/");
            break;
        case ".":
            $("#decimal").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + ".");
            break;
        case "Enter":
            $("#equal").addClass("pressed");
            displayString = $("p").html();
            alert(displayString);
            break;
        case "r":
            $("#reset").addClass("pressed");
            break;
        case "R":
            $("#reset").addClass("pressed");
            break;
        default:
            console.log("another key pressed");
            break;
    }
})

$("body").keyup(function(event){
    // console.log(event.key)
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
