const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display) {
        display.value += input;
    }
}

function clearDisplay() {
    if (display) {
        display.value = '';
    }
}

function calculate() {
    if (display) {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
}
