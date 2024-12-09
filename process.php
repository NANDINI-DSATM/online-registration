<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect form data
    $fullName = $_POST['fullName'];
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $fatherName = $_POST['fatherName'];
    $motherName = $_POST['motherName'];
    $parentContact = $_POST['parentContact'];
    $address = $_POST['address'];

    // Output collected data as response
    echo "<b>Registration Successful!</b> <br>";
    echo "Name: $fullName <br>";
    echo "Date of Birth: $dob <br>";
    echo "Gender: $gender <br>";
    echo "Email: $email <br>";
    echo "Phone: $phone <br>";
    echo "Father's Name: $fatherName <br>";
    echo "Mother's Name: $motherName <br>";
    echo "Parent's Contact: $parentContact <br>";
    echo "Address: $address <br>";
} else {
    echo "Invalid Request!";
}
?>
