"use strict";
const n1E = document.getElementById('n1'); // this is the typecasting
const n2E = document.getElementById('n2');
const btn = document.querySelector('button'); // typescript automatically knows that this is a button because we 
// used the query selector here.
const numRes = [];
const txtRes = [];
const add = (n1, n2) => {
    if (typeof n1 === 'number' && typeof n2 === 'number')
        return n1 + n2;
    else if (typeof n1 === 'string' && typeof n2 === 'string')
        return n1 + n2;
    return +n1 + +n2;
};
const printResult = (resObj) => {
    console.log(resObj.val);
};
if (btn) {
    btn.addEventListener('click', () => {
        const num1 = n1E.value;
        const num2 = n2E.value;
        const result = add(+num1, +num2);
        numRes.push(result);
        const stringResult = add('1', '2');
        txtRes.push(stringResult);
        printResult({ val: result, timestamp: new Date() });
        console.log(numRes, txtRes);
    });
}
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
});
myPromise.then(res => {
    console.log(res.split('w'));
});
