"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const  totals = [];

const calcTip = function (bill) {
        let tip;
        if (bill >= 50 && bill <= 300) {
            tip = 0.15 * bill; 
        } else {
            tip = 0.2 * bill; 
        }
        return tip;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + tips[i])
}

console.log(tips)
console.log(totals)

function calcAverage(arr) { 
  for(let sum = 0; sum < arr.length; sum++) {

  }
}