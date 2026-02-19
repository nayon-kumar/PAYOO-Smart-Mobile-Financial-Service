document.getElementById("cashoutBtn").addEventListener("click", function () {
  // Get the agent number nd validate
  const agentNumberValue = getValueFromInput("agentNumber");
  if (agentNumberValue.length !== 11) {
    myAlertError("Invalid agent number!");
    return;
  }

  // Get the cashout amount
  const cashoutAmountValue = getValueFromInput("cashoutAmount");
  if (parseInt(cashoutAmountValue) < 1 || cashoutAmountValue == "") {
    myAlertError("Invalid amout!");
    return;
  }

  // Calculate the current  balance
  const balanceValue = getBalance();

  // Calculate new balance
  if (balanceValue - cashoutAmountValue < 0) {
    myAlertError("invalid amount!");
    return;
  }
  const newBalance = (balanceValue - cashoutAmountValue).toFixed(2);

  // Get the pin and varify
  const cashoutPinValue = getValueFromInput("cashoutPin");
  if (cashoutPinValue == "1234") {
    // True >> Show an alert and update balance
    myAlertSuccess(
      `Cashout ${cashoutAmountValue} success to agent number ${agentNumberValue} on ${new Date()}`,
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
      Cashout ${cashoutAmountValue} success to agent number ${agentNumberValue} on ${new Date()}
    </div>
    `;
    // Append new div to history container
    historyContainer.append(newHistory);

    resetInput("agentNumber");
    resetInput("cashoutAmount");
    resetInput("cashoutPin");
  } else {
    // False >> Show error alert
    myAlertError("Invalid Pin!");
    return;
  }
});
