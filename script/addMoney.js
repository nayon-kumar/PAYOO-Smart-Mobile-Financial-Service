document.getElementById("addMoneyBtn").addEventListener("click", function () {
  //   Get bank account number
  const addMoneyBankValue = getValueFromInput("addMoneyBank");
  if (addMoneyBankValue == "Select Bank") {
    myAlertError("Please select a bank!");
    return;
  }

  //   Get bank account number
  const addMoneyNumberValue = getValueFromInput("addMoneyNumber");

  const numberOnlyPattern = /^\d+$/;
  if (!numberOnlyPattern.test(addMoneyNumberValue)) {
    myAlertError("Bank account number must contain only digits!");
    return;
  }

  if (addMoneyNumberValue.length !== 11) {
    myAlertError("Invalid account number");
    return;
  }

  //   Get amount
  const addMoneyAmountValue = getValueFromInput("addMoneyAmount");
  if (parseInt(addMoneyAmountValue) < 1 || addMoneyAmountValue == "") {
    myAlertError("Invalid amount!");
    return;
  }

  //   Get pin
  const addMoneyPinValue = getValueFromInput("addMoneyPin");
  if (addMoneyPinValue == "1234") {
    myAlertSuccess(
      `Add money ${addMoneyAmountValue} success from ${addMoneyBankValue} on ${new Date()}`,
    );
    //   Calculate new balance
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(addMoneyAmountValue);
    setBalance(newBalance.toFixed(2));

    // *Send to transaction history*
    // Select history container
    const historyContainer = document.getElementById("historyContainer");
    // Add new div
    const newHistory = document.createElement("div");
    // Add new div innter html
    newHistory.innerHTML = `
    <div class="p-5 bg-base-100 rounded-xl">
      Add money ${addMoneyAmountValue} success from ${addMoneyBankValue}, acc-no ${addMoneyNumberValue} on ${new Date()}
    </div>
    `;
    // Append new div to history container
    historyContainer.append(newHistory);

    resetInput("addMoneyNumber");
    resetInput("addMoneyAmount");
    resetInput("addMoneyPin");
  } else {
    // False Show alert
    myAlertError("Invalid pin number");
    return;
  }
});
