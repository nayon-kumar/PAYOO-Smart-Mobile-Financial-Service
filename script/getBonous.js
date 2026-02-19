document.getElementById("getBonouwBtn").addEventListener("click", function () {
  const coupon = getValueFromInput("coupon");
  if (coupon == "555") {
    myAlertSuccess("Success! You got 100 bonous from coupon!");
    const prevBalance = getBalance();
    setBalance(prevBalance + 100);

    // *Send to transaction history*
    // Select history container
    const historyContainer = document.getElementById("historyContainer");
    // Add new div
    const newHistory = document.createElement("div");
    // Add new div innter html
    newHistory.innerHTML = `
    <div class="p-5 bg-base-100 rounded-xl">
      You got 100 bonous from coupon on ${new Date()}
    </div>
    `;
    // Append new div to history container
    historyContainer.append(newHistory);
    resetInput("coupon");
  } else {
    myAlertError("Invalid coupon! Use coupon: 555 to get 100 bonous!");
  }
});
