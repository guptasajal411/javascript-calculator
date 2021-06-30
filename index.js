var previousNumber;
var CurrentNumber;
var operationType;

$(".number").click(function(){
    $(".calculatorDisplay").val($(".calculatorDisplay").val() + $(this).html());
})

$(".operation").click(function(){
    previousNumber = $(".calculatorDisplay").val();
    operationType = $(this).html();
    $(".calculatorDisplay").val("hjkljk");
    $(".previousDisplay").val(previousNumber + " " + operationType);
})

$(".equal").click(function(){

})