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
        
        var invite_message = $("<p></p>").text("Invitation from " + message.substring(11, message.length));
        // onclick should call function redirecting to appropriate page
        var accept_option = $("<button></button>").text("Accept").attr("onclick", "accept()");
        var decline_option = $("<button></button>").text("Decline").attr("onclick", "decline()");
        invitation_div.append(invite_message, accept_option, decline_option);
        
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

function accept()
{
  window.location.replace("game.php");
}

function decline()
{
  window.location.replace("setup.php");
}