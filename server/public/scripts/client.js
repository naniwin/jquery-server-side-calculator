$(document).ready(onReady);

let operator = '';

function onReady() {
  // operator buttons to click
  $('.operatorButton').on('click', function () {
    operator = $(this).html();
  });
  // equal button to do calculation
  $('#equalButton').on('click', inputCalculation);
  $('#clearButton').on('click', clearInput);
}

function inputCalculation() {
  // obtain number values from input
  let firstNumber = $('#firstNumInput').val();
  let secondNumber = $('#secondNumInput').val();
  let calculationStore = {
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    operator: operator,
  };
  // route input values to server to calculate
  // ajax to post route calculation to server.js
  $.ajax({
    method: 'POST',
    url: '/calculation',
    data: calculationStore,
  }).then((response) => {
    // obtain calculation from server
    // post on DOM
    let result = response.result;
    $('#result').html(`<h1>${result}</h1>`);
  });
}
// function to clear the input and displaying result
function clearInput() {
  $('#firstNumInput').val('');
  $('#secondNumInput').val('');
  $('#result').empty();
}
