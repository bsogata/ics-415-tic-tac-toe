<!DOCTYPE html>
<html>
<head>
  <title>Tic-Tac-Toe</title>
  <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.10.2.min.js"></script>
  <script src="script.js"></script>
  <link href="style.css" rel="stylesheet" type="text/css">  
</head>

<body>
  <?php 
    // Start with creating the SQL tables if they do not already exist
    include 'create_tables.php' 
    
    // Create a new Game
  ?>
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
</body>
</html>