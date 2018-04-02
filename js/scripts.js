//business
function Contact(first, last, street, city, state, zip) {
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};



// user interface logic
$(document).ready(function() {
  $("#contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet = $('input#street').val();
    var inputtedCity = $('input#city').val();
    var inputtedState = $('input#state').val();
    var inputtedZip = $('input#zip').val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet, inputtedCity, inputtedState, inputtedZip);

    $("#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#street").val("");
    $("input#city").val("");
    $("input#state").val("");
    $("input#zip").val("");

    $(".contact").last().click(function () {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street").text(newContact.street);
      $(".city").text(newContact.city);
      $(".state").text(newContact.state);
      $(".zip").text(newContact.zip);
    });
  });
});
