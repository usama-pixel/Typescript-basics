"use strict";
const n1E = document.getElementById('n1'); // this is the typecasting
const n2E = document.getElementById('n2');
const btn = document.querySelector('button'); // typescript automatically knows that this is a button because we 
// used the query selector here.
const add = (n1, n2) => n1 + n2;
if (btn) {
    btn.addEventListener('click', () => {
        const num1 = n1E.value;
        const num2 = n2E.value;
        const result = add(+num1, +num2);
    });
}
