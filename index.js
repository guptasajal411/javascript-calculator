var stingString;

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(($(element).text()).substring(1)).select();
    document.execCommand("copy");
    $temp.remove();
}

$("button").addClass("shadow");

$("button").mousedown(function (event) {
    $(this).addClass("pressed");
});

$("button").mouseup(function () {
    $(this).removeClass("pressed");
});

$(".equal").click(function () {
    stingString = (($("p").html()).substring(1));
    $("p").html("&#8203;" + eval(stingString));
    $("#copyButton").removeClass("collapse");
    $(".equal").removeAttr("data-bs-toggle");
    $(".equal").blur();
    if(stingString == ""){
        $(".historyDisplay").html('<span class="material-icons-outlined">history</span>&nbsp;' + stingString + "&nbsp;=");
    }
    else{
        $(".historyDisplay").html('<span class="material-icons-outlined">history</span>&nbsp;' + stingString);
    }
})

$("#copyButton").click(function () {
    $("#copyButton").addClass("pressCopy");
    $("#copyButton").html("Copied!");
})

$(".delete").click(function () {
    var temp = $("p").html();
    if (temp.length > 1) {
        $("p").html(temp.slice(0, -1));
    }
    else {
        console.log("cant delete any more items!")
    }
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $(".delete").blur();
})

$(".reset").click(function () {
    var temp = $("p").html();
    $("p").html("&#8203;");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $(".reset").blur();
    $(".reset").blur();
})

$("#0").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "0");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#0").blur();
});
$("#1").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "1");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#1").blur();
});
$("#2").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "2");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#2").blur();
});
$("#3").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "3");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#3").blur();
});
$("#4").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "4");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#4").blur();
});
$("#5").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "5");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#5").blur();
});
$("#6").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "6");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#6").blur();
});
$("#7").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "7");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#7").blur();
});
$("#8").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "8");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#8").blur();
});
$("#9").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "9");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#9").blur();
});
$("#plus").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "+");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#plus").blur();
});
$("#-").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "-");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#-").blur();
});
$("#x").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "*");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#x").blur();
});
$("#divide").click(function () {
    var temp = $("p").html();
    $("p").html(temp + "/");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("#divide").blur();
});
$("#decimal").click(function () {
    var temp = $("p").html();
    $("p").html(temp + ".");
    $("#copyButton").removeClass("pressCopy");
    $("#copyButton").html("Copy");
    $("").blur();
});

$("body").keydown(function (event) {
    switch (event.key) {
        case "0":
            $("#0").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "0"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "1":
            $("#1").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "1"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "2":
            $("#2").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "2"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "3":
            $("#3").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "3"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "4":
            $("#4").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "4"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "5":
            $("#5").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "5"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "6":
            $("#6").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "6"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "7":
            $("#7").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "7"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "8":
            $("#8").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "8"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "9":
            $("#9").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "9"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "Delete": $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");
            $("#del").addClass("pressed");

            var temp = $("p").html();
            if (temp.length > 1) {
                $("p").html(temp.slice(0, -1));
            }
            else {
                console.log("cant delete more items!")
            }
            break;
        case "+":
            $("#plus").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "+"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "-":
            $("#-").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "-"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "*":
            $("#x").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "*"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "/":
            $("#divide").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "/"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case ".":
            $("#decimal").addClass("pressed");
            var temp = $("p").html();
            $("p").html(temp + "."); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "Enter":
            stingString = (($("p").html()).substring(1));
            $("p").html("&#8203;" + eval(stingString));
            $("#copyButton").removeClass("collapse");
            $(".equal").removeAttr("data-bs-toggle");
            $("#copyButton").blur();
            break;
        case "r":
            $("#reset").addClass("pressed");
            var temp = $("p").html();
            $("p").html("&#8203;"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "R":
            $("#reset").addClass("pressed");
            var temp = $("p").html();
            $("p").html("&#8203;"); $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");

            break;
        case "Backspace":
            $("#copyButton").removeClass("pressCopy");
            $("#copyButton").html("Copy");
            var temp = $("p").html();
            if (temp.length > 1) {
                $("p").html(temp.slice(0, -1));
            }
            else {
                console.log("cant delete any more items!")
            }
            break;
        default:
            console.log("press a valid key!");
            break;
    }
})

$("body").keyup(function (event) {
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