var stingString;

$("button").addClass("shadow");
// $("button").addClass("border-info");

$("button").mousedown(function(event){
    $(this).addClass("pressed");
});

$("button").mouseup(function(){
    $(this).removeClass("pressed");
});

$(".equal").click(function(){
    stingString = (($("p").html()).substring(1));
    $("p").html("&#8203;" + eval(stingString));
})

$(".delete").click(function(){
    var temp = $("p").html();
    if(temp.length > 1){
        $("p").html(temp.slice(0, -1));
    }
    else{
        console.log("cant delete any more items!")
    }
})

$(".reset").click(function(){
    var temp = $("p").html();
    $("p").html("&#8203;");
})

$("#0").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "0");
});
$("#1").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "1");
});
$("#2").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "2");
});
$("#3").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "3");
});
$("#4").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "4");
});
$("#5").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "5");
});
$("#6").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "6");
});
$("#7").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "7");
});
$("#8").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "8");
});
$("#9").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "9");
});
$("#plus").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "+");
});
$("#-").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "-");
});
$("#x").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "*");
});
$("#divide").click(function(){
    var temp = $("p").html();
    $("p").html(temp + "/");
});
$("#decimal").click(function(){
    var temp = $("p").html();
    $("p").html(temp + ".");
});

$("body").keydown(function(event){
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
            var temp = $("p").html();
            if(temp.length > 1){
                $("p").html(temp.slice(0, -1));
            }
            else{
                console.log("cant delete more items!")
            }
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
            stingString = (($("p").html()).substring(1));
            $("p").html("&#8203;" + eval(stingString));
            break;
        case "r":
            $("#reset").addClass("pressed");
            var temp = $("p").html();
            $("p").html("&#8203;");
            break;
        case "R":
            $("#reset").addClass("pressed");
            var temp = $("p").html();
            $("p").html("&#8203;");
            break;
        case "Backspace":
            var temp = $("p").html();
            if(temp.length > 1){
                $("p").html(temp.slice(0, -1));
            }
            else{
                console.log("cant delete any more items!")
            }
            break;
        default:
            console.log("press a valid key!");
            break;
    }
})

$("body").keyup(function(event){
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