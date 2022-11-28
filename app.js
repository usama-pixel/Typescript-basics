var n1E = document.getElementById('n1'); // this is the typecasting
var n2E = document.getElementById('n2');
var btn = document.querySelector('button'); // typescript automatically knows that this is a button because we 
// used the query selector here.
var add = function (n1, n2) { return n1 + n2; };
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    var num1 = n1E.value;
    var num2 = n2E.value;
    var result = add(+num1, +num2);
});
