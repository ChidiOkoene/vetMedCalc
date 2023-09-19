document.getElementById("dosageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Retrieve form data
    var selectedDrug = document.getElementById("Drug").value;
    var weight = parseFloat(document.getElementById("Weight").value);
    var conc = parseFloat(document.getElementById("conc").value);

    // Perform dosage calculation and other logic here
    // myscript.js

    function calculateDosage() {
    // Get the selected drug value
        var selectedDrug = document.getElementById("Drug").value;

    // Get the weight entered by the user
        var weight = parseFloat(document.getElementById("Weight").value);

        var conc = parseFloat(document.getElementById("conc").value);

    // Perform a calculation using the selected drug value and weight
        var dosage = selectedDrug * conc / weight;

    // Display the result
        var resultContainer = document.getElementById("result");
        resultContainer.innerHTML = "Dosage: " + dosage;
    }

   
    calculatedDosage = selectedDrug * conc / weight 

    // Display the results on the same page
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "Dosage: " + calculatedDosage; // Replace with your actual calculation

    // Optionally, you can submit the form data to a server using AJAX if needed
});



