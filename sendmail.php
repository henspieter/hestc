<?php
$from = "henspieter86@gmail.com";//$_POST["from"];
$message = "test berichtje";//$_POST["message"];
$subject = "Reactie van website";
$to = 'henspieter@hotmail.com';

$headers = 'From: '. $from . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$status = mail($to, $subject, $message, $headers);

echo $status;
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
