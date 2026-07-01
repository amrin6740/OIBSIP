// Select Elements
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const error = document.getElementById("error");

// Convert Button Click
convertBtn.addEventListener("click", () => {

    // Clear previous error
    error.textContent = "";

    // Get input values
    const value = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    // Validation
    if (temperatureInput.value.trim() === "") {
        error.textContent = "⚠ Please enter a temperature.";
        clearResults();
        return;
    }

    if (isNaN(value)) {
        error.textContent = "⚠ Please enter a valid number.";
        clearResults();
        return;
    }

    let celsius, fahrenheit, kelvin;

    // Convert to Celsius first
    if (unit === "celsius") {

        if (value < -273.15) {
            error.textContent = "⚠ Temperature cannot be below absolute zero (-273.15°C).";
            clearResults();
            return;
        }

        celsius = value;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;
    }

    else if (unit === "fahrenheit") {

        if (value < -459.67) {
            error.textContent = "⚠ Temperature cannot be below absolute zero (-459.67°F).";
            clearResults();
            return;
        }

        celsius = (value - 32) * 5 / 9;
        fahrenheit = value;
        kelvin = celsius + 273.15;
    }

    else if (unit === "kelvin") {

        if (value < 0) {
            error.textContent = "⚠ Temperature cannot be below absolute zero (0 K).";
            clearResults();
            return;
        }

        kelvin = value;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    // Display Results
    celsiusResult.textContent = `${celsius.toFixed(2)} °C`;
    fahrenheitResult.textContent = `${fahrenheit.toFixed(2)} °F`;
    kelvinResult.textContent = `${kelvin.toFixed(2)} K`;

});

// Function to clear results
function clearResults() {

    celsiusResult.textContent = "-- °C";
    fahrenheitResult.textContent = "-- °F";
    kelvinResult.textContent = "-- K";

}