<!DOCTYPE HTML>

<!-- Creates or edits the cookie containing the user name -->
<?php
  if ((isset($_POST["username"])) && ($_POST["username"] != ""))
  {
    setcookie("username", $_POST["username"]);
  }
?>

<html>
<head>
  <title>Tic-Tac-Toe</title>
  <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.10.2.min.js"></script>
  <script src="script.js"></script>
  <link href="style.css" rel="stylesheet" type="text/css">  
</head>

<body>
  <form id="login" name="login" method="post">
    Username: <input type="text" id="username" /><br />
    Password: <input type="password" id="password" /><br />
    <input type="submit" id="submit" value="Login" />
  </form>
</body>
</html>