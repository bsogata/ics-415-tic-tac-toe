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
  
  <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
  <link href="css/bootstrap-theme.min.css" rel="stylesheet" type="text/css">
  <!-- html5.js for IE less than 9 -->
  <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

  <!--[if lt IE 9]>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
  <![endif]-->

  <script src="js/bootstrap.min.js"></script>
  
  <script src="js/script.js"></script>
  <link href="css/style.css" rel="stylesheet" type="text/css">  
</head>

<body>
  <div class="container">
    <!-- Navbar; use on all pages -->
    <nav class="navbar navbar-default" role="navigation">
      <a class="navbar-brand" href="login.php">Tic-Tac-Toe</a>
      <ul class="nav navbar-nav">
        <li><a href="setup.php">Games</a></li>
        <li><a href="about.php">About</a></li>
      </ul>
    </nav>
    <form id="login" name="login" method="post">
      Username: <input type="text" id="username" /><br />
      Password: <input type="password" id="password" /><br />
      <input type="submit" id="submit" value="Login" />
    </form>
  </div>
</body>
</html>