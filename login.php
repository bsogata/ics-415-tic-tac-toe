<?php
//  echo var_dump($_REQUEST);
  if ((isset($_POST["username"])) && ($_POST["username"] != "") &&
      (isset($_POST["password"])) && ($_POST["password"] != ""))
  {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    $database = new mysqli("localhost", "username", "password", "tic-tac-toe");
    
    if ($database->connect_errno)
    {
      echo "Failed to connect to MySQL: (" . $database->connect_errno . ")" . 
                                             $database->connect_error . "<br />";
    }
    else
    {
      // echo "Connection successful";
      $result = $database->query("SELECT * " .
                                 "FROM Users U " . 
                                 "WHERE U.username=\"" . $username . "\" AND " . 
                                       "U.password=\"" . $password . "\"");
      $found_user = true;
    
      // If the user name and password do not match a User in the database, then create a new User
      if (!$result)
      {
        $user_result = $database->query("SELECT * " .
                               "FROM Users U" . 
                               "WHERE U.username=\"" . $username . "\"");
        $insert_query = "INSERT INTO Users (username, password, wins, losses, draws)" . 
                        "VALUES (\"" . $username . "\"," .
                                "\"" . $password . "\"," . 
                                "\"0\", \"0\", \"0\")";
        $insert_result = $database->query($insert_query);
        
        if ((!$user_result) && (!$insert_result))
        {
          echo "Could not access account with username " . $username;
          $found_user = false;
        }
        else if (!$user_result)
        {
          echo "Invalid password for username " . $username;
          $found_user = false;
        }
      }
      
      if ($found_user)
      {
        setcookie("username", $_POST["username"]);
      }
    }
  }
?>