const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", async function () {
    const amount = parseFloat(document.getElementById("input-amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultField = document.getElementById("result-amount");
    const resultText = document.getElementById("result");

    if (isNaN(amount)) {
        resultText.innerText = "Please enter a valid amount.";
        return;
    }

    try {
    
        const response = await fetch(`https://latest.currency-api.pages.dev/v1/currencies/${fromCurrency}.json`);
        const data = await response.json();

        const rates = data[fromCurrency];

        if (!rates[toCurrency]) {
            resultText.innerText = "Conversion not available.";
            return;
        }

        const convertedAmount = amount * rates[toCurrency];

        resultField.value = convertedAmount.toFixed(2);
        resultText.innerText = `Converted: ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;

    } catch (error) {
        console.error(error);
        alert("Error fetching exchange rates.");
    }
});