<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "anubhavg388@gmail.com"; // Replace with your email address
    $subject = $_POST["subject"];
    $message = "Name: " . $_POST["firstName"] . " " . $_POST["lastName"] . "\n";
    $message .= "Email: " . $_POST["email"] . "\n";
    $message .= "Subject: " . $subject . "\n\n";
    $message .= "Message:\n" . $_POST["questions"];

    $headers = "From: " . $_POST["email"];

    mail($to, $subject, $message, $headers);
}
?>
