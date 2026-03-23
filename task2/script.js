const output = document.getElementById('output');
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.op');
const clearBtn = document.getElementById('clear');
const submitBtn = document.getElementById('btn');
const deleteBtn = document.getElementById('delete');

let currentInput = "";

function updateDisplay() {
    output.innerText = currentInput || "0";
}

numbers.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === "0") currentInput = "";
        currentInput += button.innerText;
        updateDisplay();
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        const lastChar = currentInput.slice(-1);
        if (["+", "-", "*", "/"].includes(lastChar)) return;
        
        currentInput += button.innerText;
        updateDisplay();
    });
});

clearBtn.addEventListener('click', () => {
    currentInput = "0";
    updateDisplay();
});

deleteBtn.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -4) || "0";
    updateDisplay();
});


submitBtn.addEventListener('click', () => {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        output.innerText = "Error";
        currentInput = "";
    }
});

