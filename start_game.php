<?php
  $initiator = $_POST['initiator'];
  $recipient = $_POST['recipient'];

  this should cause an error  
 
  $database = new mysqli("localhost", "username", "password", "tic-tac-toe");
  
  if ($database->connect_errno)
  {
    echo "Failed to connect to MySQL: (" . $database->connect_errno . ")" . $database->connect_error . "<br />";
  }
  else
  {
    $database->query("UPDATE Invitations " .
                     "SET accepted=TRUE " . 
                     "WHERE initiator=\"" . $initiator . "\" AND recipient=\"" . $recipient . "\"");
                           
    // Create new Game entry here
  }  
?>
