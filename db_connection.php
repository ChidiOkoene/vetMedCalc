<?php
// Replace these variables with your database credentials
$hostname = "127.0.0.1";
$username = "root";
$password = "Napoleon20$";
$database = "VetWebAppDataBase";

// Create a database connection
$connection = mysqli_connect($hostname, $username, $password, $database);

// Check if the connection was successful
if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}
?>
