<!DOCTYPE HTML>

<!-- Creates or edits the cookie containing the user name -->
<?php include 'login.php'; ?>

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
  <?php include 'create_tables.php'; ?>
  <div class="container">
    <?php include 'navbar.php'; ?>
    
    <select id="opponent_select" onchange="sendInvitation">
      <option>Select an opponent</option>
      <?php 
        $database = new mysqli("localhost", "username", "password", "tic-tac-toe");
        
        if ($database->connect_errno)
        {
          echo "Failed to connect to MySQL: (" . $database->connect_errno . ")" . $database->connect_error . "<br />";
        }
        else
        {        
          $results = $database->query("SELECT U.username FROM Users U");

          if ($results)
          {
            foreach ($results as $row)
            {
              if (($row['username'] != $_COOKIE['username']) && ($row['username'] != $_POST['username']))
              {
                echo "<option>" . $row['username'] . "</option>";
              }
            }            
          }
        }
      ?>
    </select>
  </div>
</body>
</html>