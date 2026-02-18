document.getElementById("loginBtn").addEventListener("click", function () {
  //   Get the mobile number
  const phoneNumber = document.getElementById("phoneNumber").value;
  console.log(phoneNumber);
  // Get the pin
  const pin = document.getElementById("pin").value;
  console.log(pin);
  // Match mobile number and pin
  if (phoneNumber == "01234567890" && pin == "1234") {
    // True >> Home page
    document.getElementById("alertHeading").innerText = "Success!";
    document.getElementById("alertText").innerText = "Login successfull!";
    document.getElementById("success").addEventListener("click", function () {
      window.location.assign("home.html");
    });
  } else {
    // False >> Alert
    document.getElementById("alertHeading").innerText = "Error!";
    document.getElementById("alertText").innerText =
      "Invalid phone number or pin! Use phone number: 01234567890 and pin: 1234 for test.";
  }
});
