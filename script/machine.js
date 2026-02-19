function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}

function myAlertError(value) {
  const modal = document.getElementById("my_modal_3");
  const alertHeading = document.getElementById("alertHeading");

  alertHeading.classList.remove("text-error", "text-success");
  alertHeading.classList.add("text-error");
  alertHeading.innerText = "Error!";

  document.getElementById("alertText").innerText = value;

  modal.showModal();
}

function myAlertSuccess(value) {
  const modal = document.getElementById("my_modal_3");
  const alertHeading = document.getElementById("alertHeading");

  alertHeading.classList.remove("text-error", "text-success");
  alertHeading.classList.add("text-success");
  alertHeading.innerText = "Success!";

  document.getElementById("alertText").innerText = value;

  modal.showModal();
}

function resetInput(id) {
  document.getElementById(id).value = "";
}

function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  return Number(balance);
}

function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

function showOnly(id) {
  const addMoney = document.getElementById("addMoney");
  const cashout = document.getElementById("cashout");
  const transaction = document.getElementById("transaction");
  const transferMoney = document.getElementById("transferMoney");
  const payBill = document.getElementById("payBill");
  const getBonous = document.getElementById("getBonous");

  // Hide all
  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  transaction.classList.add("hidden");
  transferMoney.classList.add("hidden");
  payBill.classList.add("hidden");
  getBonous.classList.add("hidden");

  // Show only selected
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
