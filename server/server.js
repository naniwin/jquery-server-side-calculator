// requires 
const express = require('express');
// storing the calculation
const calculationBox = [];
const app = express();
const bodyParser = require('body-parser');
// global port to use
const 5000;
// spin up server
app.listen(port,() =>{
    console.log('server up on: ', port);
});
app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));
// GET route from history to display
// POST route from input values to calculate
app.post('/calculation', (req, res)=>{
    let firstNumber = req.body.firstNumber;
    let secondNumber = req.body.secondNumber;
    let result = 0;
    // calculation using switch/case statements
    switch(operator){
        case '+':
            result = Number(firstNumber) + Number(secondNumber);
            break;
        case '-':
            result = Number(firstNumber) - Number(secondNumber);
            break;
    }
})