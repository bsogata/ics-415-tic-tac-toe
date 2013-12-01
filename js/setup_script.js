var source = new EventSource('invitation.php');

$(document).ready(function()
{
  // Sets up the EventSource listeners
  if (window.EventSource)
  {
    // If a message was sent, then another user has sent a message to this user 
    source.addEventListener('message', function(e)
    {
      var message = e.data;

      // If this user is the initiator and the response is positive, 
      // then redirect to the corresponding game page
      if (message.indexOf("Accepted:") != -1)
      {
        window.location.href = "game.php";
      }
      
      // Else if this user is the initiator and the response is negative,
      // then display message indicating that invitation was declined
      else if (message.indexOf("Declined:") != -1)
      {
        alert(message.substring(9, message.length) + " declined the invitation");
        window.location.href = "setup.php";
      }
      
      // Else this user is the recipient,
      // so display options to accept or decline offer
      else if (message.indexOf("Invitation:") != -1)
      {
        var invitation_div = $("<div></div>").attr("id", "invitation")
                                             .attr("name", "invitation")
                                             .attr("action", "setup.php")
                                             .attr("method", "post");
        
        var initiators = message.substring(11, message.length).split(";");
        
        for (var i = 0; i < initiators.length; i++)
        {
          var current_initiator = initiators[i];
          
          if (current_initiator.length > 0)
          {
            var invite_message = $("<p></p>").text("Invitation from " + current_initiator);
            // onclick should call function redirecting to appropriate page
            var accept_option = $("<button></button>").text("Accept")
                                                      .attr("onclick", 
                                                            "accept(\"" + current_initiator.trim() + "\", " + 
                                                                        "\"" + getUsername().trim() + "\")");
            var decline_option = $("<button></button>").text("Decline")
                                                       .attr("onclick", 
                                                             "decline(\"" + current_initiator.trim() + "\", " + 
                                                                          "\"" + getUsername().trim() + "\")");
            invitation_div.append(invite_message, accept_option, decline_option);
          }
        }
        
        $("#content").empty();
        $("#content").append(invitation_div);
      }
      
      closeConnection();
    }, false);
    /*
    source.addEventListener('open', function(e)
    {
      $("#connection").text("Connected");
    }, false);
    source.addEventListener('error', function(e)
    {
      $("#connection").text("Dead");
    }, false);
    */    
  }
});

function closeConnection()
{
  source.close();
}

/*
 * Accepts an invitation to a game of tic-tac-toe.
 *
 * Parameters:
 *   initiator    The string containing the name of the user who sent the invitation.
 *   recipient    The string containing the name of the user who received the invitation.
 *
 */
 
function accept(initiator, recipient)
{
  $.post("start_game.php", "{initiator: " + initiator + "} " + 
                           "{recipient: " + recipient + "}");
  window.location.replace("game.php");
}

/*
 * Declines an invitation to a game of tic-tac-toe.
 *
 * Parameters:
 *   initiator    The string containing the name of the user who sent the invitation.
 *   recipient    The string containing the name of the user who received the invitation.
 *
 */
 
function decline(initiator, recipient)
{
  $.post("decline_game.php", "{initiator: " + initiator + "} " + 
                             "{recipient: " + recipient + "}");
  window.location.replace("setup.php");
}

/*
 * Returns the value of the username cookie.
 *
 * Returns:
 *   A string containing the value of the username cookie.
 *   If none, returns "Guest".
 *
 */
 
function getUsername()
{
  var username = "Guest";
  var start_index = document.cookie.indexOf("username=");
  
  if (start_index != -1)
  {
    start_index += 9;
    var end_index = document.cookie.indexOf(";", start_index);
    
    if (end_index == -1)
    {
      end_index = document.cookie.length;
    }
    
    username = document.cookie.substring(start_index, end_index);
  }
 
  return username;
}