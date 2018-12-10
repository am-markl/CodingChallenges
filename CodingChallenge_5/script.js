var familyJohn = {
    bills: [124, 48, 268, 180, 42],
    tipCalculator: function(bill) {
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

var tips = [];
var amount = [];

for (let i = 0; i < familyJohn.bills.length; ++i) {
    tips.push(familyJohn.tipCalculator(familyJohn.bills[i]));

}

console.log(tips);


if (tips.length > 0) {
    let i = 0;
    tips.forEach( elem => {        
        amount.push(elem + familyJohn.bills[i++]);
    });
    if (amount.length > 0)
        console.log(amount);
}

