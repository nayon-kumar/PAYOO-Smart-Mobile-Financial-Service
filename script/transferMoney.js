document.getElementById("sendNowBtn").addEventListener("click", function () {
  // Get the agent number nd validate
  const transferMoneyNumber = getValueFromInput("transferMoneyNumber");
  if (transferMoneyNumber.length !== 11) {
    alert("Invalid agent number!");
    return;
  }

  // Get the cashout amount
  const transferMoneyAmount = getValueFromInput("transferMoneyAmount");
  if (parseInt(transferMoneyAmount) < 1 || transferMoneyAmount == "") {
    alert("Invalid amout!");
    return;
  }

  // Calculate the current  balance
  const balanceValue = getBalance();

  // Calculate new balance
  if (balanceValue - transferMoneyAmount < 0) {
    alert("invalid amount!");
    return;
  }
  const newBalance = (balanceValue - transferMoneyAmount).toFixed(2);

  // Get the pin and varify
  const transferMoneyPin = getValueFromInput("transferMoneyPin");
  if (transferMoneyPin == "1234") {
    // True >> Show an alert and update balance
    alert(
      `Send money ${transferMoneyAmount} success to number ${transferMoneyNumber} on ${new Date()}`,
    );
    setBalance(newBalance);

    // *Send to transaction history*
    // Select history container
    const historyContainer = document.getElementById("historyContainer");
    // Add new div
    const newHistory = document.createElement("div");
    // Add new div innter html
    newHistory.innerHTML = `
    <div class="p-5 bg-base-100 rounded-xl">
      Send money ${transferMoneyAmount} success to number ${transferMoneyNumber} on ${new Date()}
    </div>
    `;
    // Append new div to history container
    historyContainer.append(newHistory);
  } else {
    // False >> Show error alert
    alert("Invalid Pin!");
    return;
  }
});
