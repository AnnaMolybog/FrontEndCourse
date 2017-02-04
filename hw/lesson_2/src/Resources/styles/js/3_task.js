window.onload = calculator;

function calculator() {
    var operation = prompt('choose one of the following math operations: + - * / % ^');
    var a = Number(prompt('Enter number'));
    var b = Number(prompt('Enter number one more time'));

    if (typeof(a) !== "number" || isNaN(a) ) {
        document.write('Invalid input value');
    } else {
        var result = calculationResult(operation, a, b);
        document.write(result);
    }
}

var calculationResult = function calculation(operation, a, b) {
    switch (operation) {
        case '+':
            return sum(a, b);
        case '-':
            return subtraction(a, b);
        case '*':
            return multiplication(a, b);
        case '/':
            return division(a, b);
        case '%':
            return mod(a, b);
        case '^':
            return pow(a, b);
        default:
            return 'Sorry, this kind of operation is not supported';
    }
}

var sum = function sum(a, b) {
    return a + b;
};

var subtraction = function subtraction(a, b) {
    return a - b;
};

var multiplication = function multiplication(a, b) {
    return a * b;
};

var division = function division(a, b) {
    if (b == 0) {
        return 'you can not divide by zero';
    }
    return a / b;
};

var mod = function mod(a, b) {
    if (b == 0) {
        return 'you can not divide by zero';
    }
    return a % b;
};

var pow = function pow(a, n) {
    return Math.pow(a, n);
}