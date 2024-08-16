<?php
$username = $_POST['username'];
$password = $_POST['password'];

// Replace this with your own authentication logic
if ($username == 'admin' && $password == 'password') {
    session_start();
    $_SESSION['username'] = $username;
    header('Location: dashboard.html');
    exit;
} else {
    echo 'Invalid username or password';
}
?>