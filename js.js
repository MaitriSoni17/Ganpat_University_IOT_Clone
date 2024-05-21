
// For Searching
function student() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("input");
  filter = input.value.toUpperCase();
  table = document.getElementById("student_list");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}




// // Validation in Contact Form
// (() => {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// })()


//Validation in Login Form
function check() {
  var uname = document.getElementById('username').value;
  var pass = document.getElementById('pwd').value;

  if ((uname == "maitri") && pass == "123456") {
    return true;
  }
  else {
    document.getElementById('error').innerHTML = " *Invalid Username or Password";
    return false;
  }
}


//Validation in Sign Up Form
function validation() {

  var user = document.getElementById('user').value;
  var pass = document.getElementById('pwd').value;
  var confirmpass = document.getElementById('cpwd').value;
  var emails = document.getElementById('emails').value;
  if (emails == "") {
    document.getElementById('emailids').innerHTML = " *Please fill the email field";
    return false;
  }
  if (emails.indexOf('@') <= 0) {
    document.getElementById('emailids').innerHTML = " * @ Invalid Position";
    return false;
  }

  if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
    document.getElementById('emailids').innerHTML = " * . Invalid Position";
    return false;
  }

  if (user == "") {
    document.getElementById('username').innerHTML = " *Please fill the username field";
    return false;
  }

  if ((user.length <= 2) || (user.length > 20)) {
    document.getElementById('username').innerHTML = " *Username lenght must be between 2 and 20";
    return false;
  }

  if (!isNaN(user)) {
    document.getElementById('username').innerHTML = " *Only characters are allowed";
    return false;
  }

  if (pass == "") {
    document.getElementById('passwords').innerHTML = " *Please fill the password field";
    return false;
  }

  if ((pass.length <= 5) || (pass.length > 20)) {
    document.getElementById('passwords').innerHTML = " *Passwords lenght must be between  5 and 20";
    return false;
  }

  if (pass != confirmpass) {
    document.getElementById('confrmpass').innerHTML = " *Password does not match the confirm password";
    return false;
  }

  if (confirmpass == "") {
    document.getElementById('confrmpass').innerHTML = " *Please fill the confirmpassword field";
    return false;
  }

}



// Validation in apply form

function applyvalidate() {
  var phno = document.getElementById('mn').value;
  var emails = document.getElementById('emails').value;
  var nm = document.getElementById('name').value;
  var cc = document.getElementById('code').value;
  var sn = document.getElementById('state').value;
  var cn = document.getElementById('city').value;


  if (nm == "") {
    document.getElementById('nerrror').innerHTML = " *Please enter your name";
    return false;
  }
  if (emails == "") {
    document.getElementById('emailids').innerHTML = " *Please fill the email field";
    return false;
  }
  if (emails.indexOf('@') <= 0) {
    document.getElementById('emailids').innerHTML = " * @ Invalid Position";
    return false;
  }

  if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
    document.getElementById('emailids').innerHTML = " * . Invalid Position";
    return false;
  }


  if (cc == "") {
    document.getElementById('ccerror').innerHTML = " *Please enter your contry code.";
    return false;
  }
  if ((isNaN(cc))) {
    document.getElementById('ccerror').innerHTML = " *Please enter valid contry code";
    return false;
  }

  if (phno == "") {
    document.getElementById('pherror').innerHTML = "*Please fill Mobile Number";
    return false;
  }
  if (isNaN(phno)) {
    document.getElementById('pherror').innerHTML = "*Please enter only digit";
    return false;
  }
  if ((phno.length < 10)) {
    document.getElementById('pherror').innerHTML = "*Mobile number must be 10 digit";
    return false;
  }
  if ((phno.length > 10)) {
    document.getElementById('pherror').innerHTML = "*Mobile number must be 10 digit";
    return false;
  }

  if ((sn == "")) {
    document.getElementById('serror').innerHTML = " *Please enter your state name.";
    return false;
  }

  if ((!isNaN(sn))) {
    document.getElementById('serror').innerHTML = " *Only characters are allowed";
    return false;
  }

  if ((cn == "")) {
    document.getElementById('cerror').innerHTML = " *Please enter your city name.";
    return false;
  }
  if ((!isNaN(cn))) {
    document.getElementById('cerror').innerHTML = " *Only characters are allowed";
    return false;
  }


}
