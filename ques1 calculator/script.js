document.getElementById('calculateBtn').addEventListener('click', function() {
    const num1Input = document.getElementById('num1').value;
    const num2Input = document.getElementById('num2').value;
    const operator = document.getElementById('operator').value;
    const errorDiv = document.getElementById('error-message');
    const resultValue = document.getElementById('resultValue');

    errorDiv.style.display = 'none';
    errorDiv.innerText = '';
    resultValue.innerText = '-';

    if (num1Input.trim() === '' || num2Input.trim() === '') {
        errorDiv.innerText = 'Please enter values in both number fields.';
        errorDiv.style.display = 'block';
        return;
    }

    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

    if (isNaN(num1) || isNaN(num2)) {
        errorDiv.innerText = 'Please enter valid numerical inputs.';
        errorDiv.style.display = 'block';
        return;
    }

    let result;

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                errorDiv.innerText = 'Error: Division by zero is not allowed.';
                errorDiv.style.display = 'block';
                return;
            }
            result = num1 / num2;
            break;
        default:
            errorDiv.innerText = 'Invalid operation selected.';
            errorDiv.style.display = 'block';
            return;
    }

    if (result % 1 !== 0) {
        resultValue.innerText = result.toFixed(4).replace(/\.?0+$/, "");
    } else {
        resultValue.innerText = result;
    }
});