<?php
  $database = new mysqli("localhost", "username", "password", "tic-tac-toe");
  
  if ($database->connect_errno)
  {
    echo "Failed to connect to MySQL: (" . $database->connect_errno . ")" . $database->connect_error . "<br />";
  }
  else
  {
    $database->query("DELETE FROM Games WHERE xname=\"" . $_POST['xname'] . "\" OR " .
                                             "oname=\"" . $_POST['oname'] . "\";");
  }
?>