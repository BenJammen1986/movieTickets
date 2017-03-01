// back-end logic
function ticket(movieTitle, movieTimes) {
  this.movieTitle = movie;
  this.movieTimes = time;
//  this.ticketPrice = price;
}

function finalTicketPrice(movieTimes, ticketType) {
  if (movieTimes === 2 && ticketType === "adult") {
    this.ticketPrice = "$9.50";
  }
  else {
    this.ticketPrice = "$6.50";
  }
  return finalTicketPrice();
}
// front-end logic
$(document).ready(function(ready) {
  $(".dog").submit(function() {
    event.preventDefault();
    debugger;
    var movieTitle = $("input:radio[name=movie]:checked").val();
    var movieTimes = $("input:radio[name=time]:checked").val();
    var ticketType = $("input:radio[name=ticket]:checked").val();
    var ticket = new ticket(movieTitle, movieTimes, ticketPrice);
    $("#finalPrice").append(finalTicketPrice(ticket.movie, ticket.time, ticket.price));
  });
});
