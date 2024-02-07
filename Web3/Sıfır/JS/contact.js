function validate() {
  if (document.myForm.Name.value == "") {
    alert("Please provide your Name !");
    document.myForm.Name.focus();
    return false;
  }
  if (document.myForm.Email.value == "") {
    alert("Please provide your Email !");
    document.myForm.Email.focus();
    return false;
  }
  if (document.myForm.Email.value != "") {
    var emailID = document.myForm.Email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || dotpos - atpos < 2) {
      alert("Please enter correct Email ID !");
      document.myForm.Email.focus();
      return false;
    }
  }
  if (document.myForm.Phone.value == "") {
    alert("Please provide your 10 digit Phone !");
    document.myForm.Phone.focus();
    return false;
  }
  if (
    isNaN(document.myForm.Phone.value) ||
    document.myForm.Phone.value.length != 10
  ) {
    alert(
      "Phone number should contain at least 10 characters (Numbers) !"
    );
    document.myForm.Phone.focus();
    return false;
  }
  if (document.myForm.Message.value == "") {
    alert("Please provide your Message !");
    document.myForm.Message.focus();
    return false;
  } else
  alert("Thanks for signing!")
}