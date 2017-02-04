window.onload = handleAge;

const MIN_ALLOWED_AGE = 18;

function handleAge() {
    var age = parseInt(prompt('Enter your age please'));

    if (typeof(age)  == "number" && age > 0) {
        if (age < MIN_ALLOWED_AGE) {
            document.write('Alcohol drinks are not allowed');
        } else {
            document.write('You can legally drink alcohol');
        }
    } else {
        document.write('Invalid input value');
    }

}