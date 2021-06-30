var previousNumber;
var currentNumber;
var operationType;

$(".number").click(function(){
    $(".calculatorDisplay").val($(".calculatorDisplay").val() + $(this).html());
})

$(".operation").click(function(){
    previousNumber = $(".calculatorDisplay").val();
    operationType = $(this).html();
    $(".calculatorDisplay").val("hjkljk");
    $(".previousDisplay").val(previousNumber + operationType);
})

$(".equal").click(function(){
    currentNumber = $(".calculatorDisplay").val();
    $(".previousDisplay").val($(".previousDisplay").val() + currentNumber);
    if(operationType == "+"){
        addition(previousNumber, currentNumber);
    }
    if(operationType == "-"){
        subtraction(previousNumber, currentNumber);
    }
    if(operationType == "*"){
        multiplication(previousNumber, currentNumber);
    }
    if(operationType == "/"){
        division(previousNumber, currentNumber);
    }
})


function addition(previousNumber, currentNumber){
    $(".calculatorDisplay").val(parseInt(previousNumber) + parseInt(currentNumber));
}
function subtraction(previousNumber, currentNumber){
    $(".calculatorDisplay").val(parseInt(previousNumber) - parseInt(currentNumber));
}
function multiplication(previousNumber, currentNumber){
    $(".calculatorDisplay").val(parseInt(previousNumber) * parseInt(currentNumber));
}
function division(previousNumber, currentNumber){
    $(".calculatorDisplay").val(parseInt(previousNumber) / parseInt(currentNumber));
}