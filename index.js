var previousNumber;
varCurrentNumber

$(".number").click(function(){
    $(".calculatorDisplay").val($(".calculatorDisplay").val() + $(this).html());
})