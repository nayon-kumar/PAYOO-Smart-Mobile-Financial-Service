function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
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

  // Hide all
  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  transaction.classList.add("hidden");

  // Show only selected
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
