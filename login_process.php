<?php
// Include a database connection file (replace with your database connection logic)
include("db_connection.php");

// Retrieve user input
$vcn = $_POST['vcn'];
$password = $_POST['password'];

// Validate user credentials (replace with your authentication logic)
$query = "SELECT * FROM users WHERE vcn = '$vcn' AND password = '$password'";
$result = mysqli_query($connection, $query);

if (mysqli_num_rows($result) == 1) {
    // User is authenticated, redirect to a dashboard or other page
    header("Location: dashboard.php");
    exit();
} else {
    // Authentication failed, display an error message
    echo "Invalid VCN or password. Please try again.";
}

// Close the database connection (replace with your database close logic)
mysqli_close($connection);
?>
