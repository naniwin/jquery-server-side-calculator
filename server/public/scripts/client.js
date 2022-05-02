$(document).ready(onReady);

let operator = '';

function onReady() {
  // operator buttons to click
  $('.operatorButton').on('click', function () {
    operator = $(this).html();
  });
  // equal button to do calculation
  $('#equalButton').on('click', inputCalculation);
}

function inputCalculation() {
  // obtain number values from input
  let firstNumber = $('#firstNumInput').val();
  let secondNumber = $('#secondNumInput').val();
}
