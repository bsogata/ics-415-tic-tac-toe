$(document).ready(function()
{
  var move = 0;
  
  // Any click on a square
  $("div.square").click(function()
  {
    // If the square is empty
    if ($(this).text().length == 0)
    {
      // Places the appropriate mark
      $(this).text(getMark(move));  
      
      // Check if a player won
      if (checkRows(getMark(move)) || 
          checkColumns(getMark(move)) || 
          checkDiagonals(getMark(move)))
      {
        alert("Player " + getMark(move) + " won!");
        $("div.square").unbind('click');
        highlightWin(getMark(move));
      }
      else if (move >= 8)
      {
        alert("The game is a draw!");
      }

      move++;
    }
  });
});

/*
 * Returns the appropriate mark for the current player.
 *
 * Parameters:
 *   move    The integer equal to the current turn number.
 *
 * Returns:
 *   If the turn number if even, returns "X",
 *                      else returns "O".
 *
 */
 
function getMark(move)
{
  return (move % 2 == 0) ? ("X") : ("O");
}

/*
 * Checks the rows of the tic-tac-toe board to see if there are three matching marks in a row.
 *
 * Parameters:
 *   mark    The string equal to the mark to search for.
 *
 * Returns:
 *   A boolean that is true if there was a match, 
 *                     false otherwise.
 *
 */
 
 function checkRows(mark)
 {
   return (($("#square0").text() == mark) && ($("#square1").text() == mark) && ($("#square2").text() == mark)) || 
          (($("#square3").text() == mark) && ($("#square4").text() == mark) && ($("#square5").text() == mark)) || 
          (($("#square6").text() == mark) && ($("#square7").text() == mark) && ($("#square8").text() == mark));
 }
 
 /*
  * Checks the columns of the tic-tac-toe board to see if there are three matching marks in a row.
  *
  * Parameters:
  *   mark    The string equal to the mark to search for.
  *
  * Returns:
  *   A boolean that is true if there was a match, 
  *                     false otherwise.
  *
  */
 
 function checkColumns(mark)
 {
   return (($("#square0").text() == mark) && ($("#square3").text() == mark) && ($("#square6").text() == mark)) || 
          (($("#square1").text() == mark) && ($("#square4").text() == mark) && ($("#square7").text() == mark)) || 
          (($("#square2").text() == mark) && ($("#square5").text() == mark) && ($("#square8").text() == mark));
 }
 
 /*
  * Checks the diagonals of the tic-tac-toe board to see if there are three matching marks in a row.
  *
  * Parameters:
  *   mark    The string equal to the mark to search for.
  *
  * Returns:
  *   A boolean that is true if there was a match, 
  *                     false otherwise.
  *
  */
 
 function checkDiagonals(mark)
 {
   return (($("#square0").text() == mark) && ($("#square4").text() == mark) && ($("#square8").text() == mark)) || 
          (($("#square2").text() == mark) && ($("#square4").text() == mark) && ($("#square6").text() == mark));
 }
 
 /*
  * Highlights the squares involved in a win.
  * 
  * Parameters:
  *   mark    The mark to search for.
  *
  */
  
function highlightWin(mark)
{
  // There is almost certainly a more efficient way of doing this, but Branden is lazy
  if (($("#square0").text() == mark) && ($("#square1").text() == mark) && ($("#square2").text() == mark))
  {
    $("#square0").css("background-color", getWinColor(mark));
    $("#square1").css("background-color", getWinColor(mark));
    $("#square2").css("background-color", getWinColor(mark));
  }  
  if (($("#square3").text() == mark) && ($("#square4").text() == mark) && ($("#square5").text() == mark))
  {
    $("#square3").css("background-color", getWinColor(mark));
    $("#square4").css("background-color", getWinColor(mark));
    $("#square5").css("background-color", getWinColor(mark));
  }  
  if (($("#square6").text() == mark) && ($("#square7").text() == mark) && ($("#square8").text() == mark))
  {
    $("#square6").css("background-color", getWinColor(mark));
    $("#square7").css("background-color", getWinColor(mark));
    $("#square8").css("background-color", getWinColor(mark));
  }
  if (($("#square0").text() == mark) && ($("#square3").text() == mark) && ($("#square6").text() == mark))
  {
    $("#square0").css("background-color", getWinColor(mark));
    $("#square3").css("background-color", getWinColor(mark));
    $("#square6").css("background-color", getWinColor(mark));
  }
  if (($("#square1").text() == mark) && ($("#square4").text() == mark) && ($("#square7").text() == mark))
  {
    $("#square1").css("background-color", getWinColor(mark));
    $("#square4").css("background-color", getWinColor(mark));
    $("#square7").css("background-color", getWinColor(mark));  
  }
  if (($("#square2").text() == mark) && ($("#square5").text() == mark) && ($("#square8").text() == mark))
  {
    $("#square2").css("background-color", getWinColor(mark));
    $("#square5").css("background-color", getWinColor(mark));
    $("#square8").css("background-color", getWinColor(mark));
  }
  if (($("#square0").text() == mark) && ($("#square4").text() == mark) && ($("#square8").text() == mark))
  {
    $("#square0").css("background-color", getWinColor(mark));
    $("#square4").css("background-color", getWinColor(mark));
    $("#square8").css("background-color", getWinColor(mark));
  }
  if (($("#square2").text() == mark) && ($("#square4").text() == mark) && ($("#square6").text() == mark))
  {
    $("#square2").css("background-color", getWinColor(mark));
    $("#square4").css("background-color", getWinColor(mark));
    $("#square6").css("background-color", getWinColor(mark));
  }
}

/*
 * Returns a string containing the color name to use to highlight a winning square.
 * 
 * Parameters:
 *   mark    The mark to get a color for.
 *
 * Returns:
 *   The string "red" if the mark is "X",
 *   the string "blue" if the mark is "O",
 *   an empty string otherwise.
 *
 */
 
function getWinColor(mark)
{
  var color = "";
  
  switch (mark)
  {
    case "X":
      color = "red";
      break;
    case "O":
      color = "blue";
      break;
    default:
      color = "";
      break;
  }
  
  return color;
}

/*
 * Sends an invitation to the user currently selected.
 *
 */
 
function sendInvitation()
{
  var selection = $("#opponent_select option:selected").text();
  alert(selection);
}