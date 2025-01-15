const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const output = document.getElementById("output");
const resultButton = document.getElementById("result");

function isInputValid(input) {
    return input != '' && !isNaN(input)
}

function calculateBMI(height, weight) {
    height = height / 100;

    return weight / (height * height);
}

function getBMICategory(bmi) {
    if (bmi < 18.5)
        return "Underweight";
    else if (bmi >= 18.5 && bmi < 25)
        return "Normal weight";
    else if (bmi >= 25 && bmi < 30)
        return "Overweight"
    else
        return "Obese";
}

resultButton.addEventListener("click", () => {
    const height = heightInput.value.trim();
    const weight = weightInput.value.trim();

    if (isInputValid(height) && isInputValid(weight)) {
        const heightInCm = parseFloat(height);
        const weightInKg = parseFloat(weight);

        const bmi = calculateBMI(heightInCm, weightInKg);
        const bmiCategory = getBMICategory(bmi);

        output.textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
    } else {
        output.textContent = "Please enter valid input";
    }
})

