function convertTemperature(temp, scale) {
    if (scale === "C") {
        return (temp * 9/5) + 32;   // C → F
    } else if (scale === "F") {
        return (temp - 32) * 5/9;   // F → C
    } else {
        return `invalid temperature: ${temp} (${scale})`;
    }
}

console.log(convertTemperature(100, "C"));
