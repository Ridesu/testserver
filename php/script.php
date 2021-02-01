<?php
  $email = $_POST['email'];
  $name = $_POST['name'];
  $message = $_POST['message'];
  
  $finmessage = "$name  "."$message";
  
  $to = "balaclawa39@gmail.com";
  $subject = "Регістрація";
  $subject = "=?utf-8?B?".base64_encode($subject)."?=";
  $send = "From: $email\r\nReply-to: $email\r\nContent-type: text/plain; charset=utf8\r\n";
  
  
  $boo = mail($to, $subject, $finmessage, $subject);
  
  echo "result : <".$boo.">";
  
  #header("Location: ../index.html");
?>