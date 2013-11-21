<?php
  $database = new mysqli("localhost", "username", "password", "tic-tac-toe");
  
  if ($database->connect_errno)
  {
    echo "Failed to connect to MySQL: (" . $database->connect_errno . ")" . $database->connect_error . "<br />";
  }
  else
  {
    $users = $database->query("CREATE TABLE IF NOT EXISTS Users (email CHAR(128),
                                                                 password CHAR(128),
                                                                 wins INTEGER,
                                                                 losses INTEGER,
                                                                 draws INTEGER)");
                                      
    $games = $database->query("CREATE TABLE IF NOT EXISTS Games (xid INTEGER NOT NULL,
                                                                 oid INTEGER NOT NULL,
                                                                 square0 INTEGER,
                                                                 square1 INTEGER,
                                                                 square2 INTEGER,
                                                                 square3 INTEGER,
                                                                 square4 INTEGER,
                                                                 square5 INTEGER,
                                                                 square6 INTEGER,
                                                                 square7 INTEGER,
                                                                 square8 INTEGER, 
                                                                 turn INTEGER)");
  }
?>
