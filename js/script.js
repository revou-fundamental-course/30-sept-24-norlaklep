document.getElementById('convert-btn').addEventListener('click', function () {
    let celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        alert('Please enter a valid temperature in Celsius.');
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    let calculation = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;

    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('calculation').value = calculation;
});

document.getElementById('reverse-btn').addEventListener('click', function () {
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (isNaN(fahrenheit)) {
        alert('Please enter a valid temperature in Fahrenheit.');
        return;
    }

    let celsius = (fahrenheit - 32) * 5/9;
    let calculation = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;

    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('calculation').value = calculation;
});
