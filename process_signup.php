<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $first_name = $_POST["first_name"];
    $middle_name = $_POST["middle_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $vcn = $_POST["vcn"];
    $state = $_POST["state"];
    $city = $_POST["city"];

    // Connect to your MySQL database (replace with your database credentials)
    $mysqli = new mysqli("localhost", "username", "password", "database_name");

    // Check connection
    if ($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }

    // Prepare and execute the SQL query to insert data into the database
    $sql = "INSERT INTO users (first_name, middle_name, last_name, email, phone, vcn, state, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("ssssssss", $first_name, $middle_name, $last_name, $email, $phone, $vcn, $state, $city);
    
    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the database connection
    $stmt->close();
    $mysqli->close();
} else {
    // Redirect to the signup page if the form is not submitted
    header("Location: signup.html");
    exit;
}
?>
