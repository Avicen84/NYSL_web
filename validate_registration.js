function validateForm() {
  var firstname = document.forms.formulario.firstname.value;
  if (firstname === "") {
    alert("Name must be filled out");
    return false;
  }
}

var LastName = document.forms.formulario.LastName.value;

var textfields = ["firstname", "lastname", "streetaddress", "city", "zipcode", "guardian", "contactphone", "contactemail" ];

function validateForm() {
  if (textfields === "") {
    alert("All fields must be filled out");
  }
}