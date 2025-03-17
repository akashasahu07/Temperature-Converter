function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    if (celsiusInput.value !== "") {
        // Convert Celsius to Fahrenheit
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
        } else {
            alert("Please enter a valid number for Celsius!");
        }
    } else if (fahrenheitInput.value !== "") {
        // Convert Fahrenheit to Celsius
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheitValue)) {
            const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
            celsiusInput.value = celsiusValue.toFixed(2);
        } else {
            alert("Please enter a valid number for Fahrenheit!");
        }
    } else {
        alert("Please enter a value in either Celsius or Fahrenheit!");
    }
}
