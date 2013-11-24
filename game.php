<!DOCTYPE html>
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
  <?php 
    // Start with creating the SQL tables if they do not already exist
    include 'create_tables.php' 
    
    // Create a new Game
  ?>
  <div class="container">
    <!-- Navbar; use on all pages -->
    <nav class="navbar navbar-default" role="navigation">
      <a class="navbar-brand" href="login.php">Tic-Tac-Toe</a>
      <ul class="nav navbar-nav">
        <li><a href="setup.php">Games</a></li>
        <li><a href="about.php">About</a></li>
      </ul>
    </nav>

    <table>
      <tr>
        <td>
          <div id="square0" class="square"></div>
        </td>
        <td>
          <div id="square1" class="square"></div>
        </td>
        <td>
          <div id="square2" class="square"></div>
        </td>
      </tr>
      <tr>
        <td>
          <div id="square3" class="square"></div>
        </td>
        <td>
          <div id="square4" class="square"></div>
        </td>
        <td>
          <div id="square5" class="square"></div>
        </td>
      </tr>
      <tr>
        <td>
          <div id="square6" class="square"></div>
        </td>
        <td>
          <div id="square7" class="square"></div>
        </td>
        <td>
          <div id="square8" class="square"></div>
        </td>
      </tr>
    </table>  
  </div>
</body>
</html>