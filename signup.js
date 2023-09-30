// signup.js
document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById("signup-form");

    signUpForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting by default

        // Retrieve user inputs
        const firstName = document.getElementById("first_name").value;
        const middleName = document.getElementById("middle_name").value;
        const lastName = document.getElementById("last_name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const vcn = document.getElementById("vcn").value;
        const state = document.getElementById("state").value;
        const city = document.getElementById("city").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm_password").value;

        // Validation checks
        if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || phone.trim() === "" || vcn.trim() === "" || state.trim() === "" || city.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
            alert("All fields are required.");
            return; // Prevent form submission if any field is empty
        }

        // Email validation using a simple regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return; // Prevent form submission if email is not valid
        }

        // Password confirmation check
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return; // Prevent form submission if passwords do not match
        }

        // If validation passes, you can submit the form or send the data to the server
        // You can also redirect the user to the dashboard page after successful registration

        // For demonstration purposes, we'll just display a success message
        alert("Registration successful!");

        // You can replace the alert with code to submit the form or send data to the server
    });
});
