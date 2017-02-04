const G = 9.8;

window.onload = processCalculation;

function processCalculation() {
    var result = 'Input value is not valid';
    var v0 = prompt('Please enter value of v0');
    var t = prompt('Please enter value of t');

    if ((Number(v0)) && (Number(t)) || (v0 === 0) || (t === 0)) {
        console.log(v0);
        console.log(t);
        result = calculation(v0, t);
    }

    document.write(result);
}

var calculation = function countFormula(v0, t) {
     return (v0 * t) + (G * Math.pow(t,2))/2;
};
