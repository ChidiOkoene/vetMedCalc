function calculateDosage() {
    // Retrieve form data
    var selectedDrug = parseFloat(document.getElementById("Drug").value);
    var weight = parseFloat(document.getElementById("Weight").value);
    var conc = parseFloat(document.getElementById("conc").value);

    // Check if weight and concentration are valid numbers
    if (isNaN(weight) || isNaN(conc)) {
        alert("Please enter valid numeric values for weight and concentration.");
        return; // Stop further execution
    }

    // Perform dosage calculation
    var dosage = selectedDrug * conc / weight;

    // Display the result in the span
    var dosageValueSpan = document.getElementById("dosageValue");
    dosageValueSpan.textContent = dosage.toFixed(2); // Display dosage with 2 decimal places
}
