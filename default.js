// way number 1
function addSum(no1, no2) {
    if (no2 == undefined) {
        no2 = 0;
    }
    return no1 + no2;
}
const total = addSum(15);
// console.log(total);

// way number 2
function addSumAgain(no1, no2) {
    no2 = no2 || 0;
    return no1 + no2;
}
const totalAgain = addSumAgain(15);
// console.log(totalAgain);


// New update in ES6 - Default Perameter.
function addEqual(no1, no2 = 0) {
    return no1 + no2;
}
const equalTotal = addEqual(20);
console.log(equalTotal)