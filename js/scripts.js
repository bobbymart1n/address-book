//business
function Contact(first, last, street, city, state, zip) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};
function Address(type, street, city, state) {
  this.street = street;
  this.type = type;
  this.city = city;
  this.state = state;
}
Address.prototype.fullAddress = function() {
  return this.type + ": " + this.street + ", " + this.city + ", " + this.state;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("select.new-type").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
}

  function addressFields() {
    $("#new-addresses").append('<div class="new-address">' +
                                '<div class="address-container">' +
                                  '<div class="form-group">' +
                                    '<label for="new-type">Type</label>' +
                                    '<select class="form-control new-type">' +
                                      '<option value="Home">Home</option>' +
                                      '<option value="Work">Work</option>' +
                                    '</select>' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-street">Street</label>' +
                                    '<input type="text" class="form-control new-street">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-city">City</label>' +
                                    '<input type="text" class="form-control new-city">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-state">State</label>' +
                                    '<input type="text" class="form-control new-state">' +
                                  '</div>' +
                                 '</div>' +
                                '</div>');
  };

// user interface logic
$(document).ready(function() {
  $("#add-address").click(function() {
    addressFields();
    $(".address-container").fadeIn();


  });
  $("#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedType = $(this).find("select.new-type").val();
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress)
    });
    $("#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function () {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
        $("#addresses li").hover(function() {
          $(this).addClass("hover");
        });
      });
    });
    $(".address-container").parent().remove();
    resetFields();
  });
});
