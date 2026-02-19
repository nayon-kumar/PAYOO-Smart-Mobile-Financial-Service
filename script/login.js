document.getElementById("loginBtn").addEventListener("click", function () {
  const phoneNumber = document.getElementById("phoneNumber").value;
  const pin = document.getElementById("pin").value;

  const alertHeading = document.getElementById("alertHeading");
  const alertText = document.getElementById("alertText");

  alertHeading.classList.remove("text-error", "text-success");

  if (phoneNumber == "01234567890" && pin == "1234") {
    alertHeading.classList.add("text-success");
    alertHeading.innerText = "Success!";
    alertText.innerText = "Login successful!";

    document.getElementById("success").addEventListener("click", function () {
      window.location.href = "home.html";
    });

    resetInput("phoneNumber");
    resetInput("pin");
  } else {
    alertHeading.classList.add("text-error");
    alertHeading.innerText = "Error!";
    alertText.innerText =
      "Invalid mobile number or pin! Use mobile number: 01234567890 and pin: 1234 for test.";
  }
});
