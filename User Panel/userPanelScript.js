function signUp() {
  var phoneNumber = document.getElementById("phoneNumber").value;
  if (!isNaN(phoneNumber) && phoneNumber.length === 11) {
    signUpPasswordChecking();
  } else {
    alert(
      "Phone number must only contain numeric value and must have exact 11 digits!!"
    );
  }
}

function signUpPasswordChecking() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var signUpSuccessContent = document.getElementById("signUpSuccessful");
  var signUpContent = document.getElementById("signUpContent");
  if (password.length === 8) {
    if (password === confirmPassword) {
      signUpContent.style.display = "none";
      signUpSuccessContent.style.display = "block";
    } else {
      alert("Passwrods do not match!!");
    }
  } else {
    alert("Password must have 8 characters!!");
  }
}

function logIn() {
  var signUpEmail = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var loginEmail = document.getElementById("loginEmail").value;
  var loginPassword = document.getElementById("loginPassword").value;
  if (loginEmail === signUpEmail && loginPassword === password) {
    alert("Login successfull!");
  } else {
    alert("Incorrect email or password.");
  }
}
