// Get the display element
let display = document.getElementById('display');

// Function to append value to the display
function appendToDisplay(value) {
   // Check if display is '0' or 'Error', then replace with value; otherwise append
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Function to calculate the expression in the display
function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    display.innerText = '0';
}
