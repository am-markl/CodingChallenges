var familyJohn = {
    bills: [124, 48, 268, 180, 42],
    tipCalculator: bill => {
        if (bill < 50) {
            return 0.2 * bill;
        } 
        else if (bill >= 50 && bill <= 200) {
            return 0.15 * bill;
        }
        else {
            return 0.1 * bill;
        }
    }
}

var familyMark = {
    bills: [77, 375, 110, 45],
    tipCalculator: bill => {
        if (bill < 100) {
            return 0.2 * bill;
        } 
        else if (bill >= 100 && bill <= 300) {
            return 0.1 * bill;
        }
        else {
            return 0.25 * bill;
        }
    }
}

var tipsJohn = [];
var amountJohn = [];

for (let i = 0; i < familyJohn.bills.length; ++i) {
    tipsJohn.push(familyJohn.tipCalculator(familyJohn.bills[i]));
}

console.log('Tips for John\'s family ' + tipsJohn);


if (tipsJohn.length > 0) {
    let i = 0;
    tipsJohn.forEach( elem => {        
        amountJohn.push(elem + familyJohn.bills[i++]);
    });
    if (amountJohn.length > 0)
        console.log('Total amount paid by John\'s family ' + amountJohn);
}

var tipsMark = [];
var amountMark = [];

for (let i = 0; i < familyMark.bills.length; ++i) {
    tipsMark.push(familyMark.tipCalculator(familyMark.bills[i]));
}

console.log('Tips for Mark\'s family ' + tipsMark);

if (tipsMark.length > 0) {
    let i = 0;
    tipsMark.forEach( elem => {        
        amountMark.push(elem + familyMark.bills[i++]);
    });
    if (amountMark.length > 0)
        console.log('Total amount paid by Mark\'s family ' + amountMark);
}

function averageTip (tips) {
    let totalTips = 0;
    let average = 0;
    if (tips.length > 0) {
        tips.forEach(elem => {
            totalTips += elem;
        });
        average = totalTips / tips.length;
    }
    return average;
}

console.log('The average tip for John\'s family is ' + averageTip(tipsJohn));
console.log('The average tip for Mark\'s family is ' + averageTip(tipsMark));
