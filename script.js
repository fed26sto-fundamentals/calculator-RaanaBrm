const display = document.getElementById('display');
let currentValue = '0';
let operator = null;
let firstValue = null;
let secondValue = false;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'clear') {
            currentValue = '0';
            operator = null;
            firstValue = null;
            secondValue = false;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value;
            firstValue = currentValue;
            secondValue = true;
        } else if (value === '=') {
            if (operator) {
                currentValue = eval(`${firstValue} ${operator} ${currentValue}`);
                operator = null;
            }
        } else {
            currentValue = secondValue ? value : currentValue === '0' ? value : currentValue + value;
            secondValue = false;
        }

        display.textContent = currentValue;
    });
});
