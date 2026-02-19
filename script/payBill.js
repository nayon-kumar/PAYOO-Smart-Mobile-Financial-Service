document.getElementById("payNowBtn").addEventListener("click", function () {
  //   Get bank account number
  const paybillType = getValueFromInput("paybillType");
  if (paybillType == "Select One") {
    alert("Please select one to pay!");
    return;
  }

  //   Get bank account number
  const payBillNumber = getValueFromInput("payBillNumber");
  if (payBillNumber.length !== 11) {
    alert("Invalid biller account number");
    return;
  }

  //   Get amount
  const payBillAmount = getValueFromInput("payBillAmount");
  if (parseInt(payBillAmount) < 1 || payBillAmount == "") {
    alert("Invalid amount!");
    return;
  }

  //   Get pin
  const payBillPin = getValueFromInput("payBillPin");
  if (payBillPin == "1234") {
    alert(
      `Pay bill ${payBillAmount} success for ${paybillType} on ${new Date()}`,
    );
    //   Calculate new balance
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(payBillAmount);
    setBalance(newBalance.toFixed(2));

    // *Send to transaction history*
    // Select history container
    const historyContainer = document.getElementById("historyContainer");
    // Add new div
    const newHistory = document.createElement("div");
    // Add new div innter html
    newHistory.innerHTML = `
    <div class="p-5 bg-base-100 rounded-xl">
      Pay bill ${payBillAmount} success for ${paybillType} on ${new Date()}
    </div>
    `;
    // Append new div to history container
    historyContainer.append(newHistory);
  } else {
    // False Show alert
    alert("Invalid pin number");
    return;
  }
});
