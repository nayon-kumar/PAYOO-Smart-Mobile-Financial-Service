document.getElementById("addMoneyBtn").addEventListener("click", function () {
  //   Get bank account number
  const addMoneyBankValue = getValueFromInput("addMoneyBank");
  if (addMoneyBankValue == "Select Bank") {
    alert("Please select a bank!");
    return;
  }

  //   Get bank account number
  const addMoneyNumberValue = getValueFromInput("addMoneyNumber");
  if (addMoneyNumberValue.length !== 11) {
    alert("Invalid account number");
    return;
  }

  //   Get amount
  const addMoneyAmountValue = getValueFromInput("addMoneyAmount");
  if (parseInt(addMoneyAmountValue) < 1 || addMoneyAmountValue == "") {
    alert("Invalid amount!");
    return;
  }

  //   Get pin
  const addMoneyPinValue = getValueFromInput("addMoneyPin");
  if (addMoneyPinValue == "1234") {
    //   Calculate new balance
    alert(
      `Add money ${addMoneyAmountValue} success from ${addMoneyBankValue} at ${new Date()}`,
    );
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(addMoneyAmountValue);
    setBalance(newBalance.toFixed(2));
  } else {
    // False Show alert
    alert("Invalid pin number");
    return;
  }
});
