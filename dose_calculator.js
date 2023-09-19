document.getElementById("dosageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Retrieve form data
    var selectedDrug = document.getElementById("Drug").value;
    var weight = parseFloat(document.getElementById("Weight").value);
    var dosage = parseFloat(document.getElementById("dosage").value);

    // Perform dosage calculation and other logic here
   
    calculatedDosage = selectedDrug * dosage / weight 

    // Display the results on the same page
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "Dosage: " + calculatedDosage; // Replace with your actual calculation

    // Optionally, you can submit the form data to a server using AJAX if needed
});



