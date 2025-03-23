const BASE_URL="https://v6.exchangerate-api.com/v6/157e25736d8288b82c3ce539/latest";
const API="157e25736d8288b82c3ce539";

const dropDown = document.querySelector(".currency-select select"); 
let btn= document.querySelector("#btn");

const fromCurrencyDropdown = document.getElementById("fromCurrency");
const toCurrencyDropdown = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const convertButton = document.getElementById("convert");
const conversionResult = document.getElementById("conversionResult");

// Function to populate dropdowns
function populateDropdown(dropdown, defaultCurrency) {
    for (let code in countryList) {
        const option = document.createElement("option");
        option.value = code;
        option.textContent = `${countryList[code]} (${code})`;

       
        if (code === defaultCurrency) {
            option.selected = true;
        }

        dropdown.appendChild(option);
    }
}


populateDropdown(fromCurrencyDropdown, "USD"); 
populateDropdown(toCurrencyDropdown, "PKR");  


convertButton.addEventListener("click", async () => {
    const fromCurrency = fromCurrencyDropdown.value;
    const toCurrency = toCurrencyDropdown.value;
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const url = `${BASE_URL}/${fromCurrency}`;
    const response = await fetch(url);  
    const data = await response.json();
    const conversionRate = data.conversion_rates[toCurrency];
    const result = amount * conversionRate; 
    conversionResult.textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
}
);  
    
