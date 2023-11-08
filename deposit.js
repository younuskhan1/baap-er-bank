function getDepositAndWithdraw(inpuFieldtId) {
    const inputMoneyField = document.getElementById(inpuFieldtId);
    const inputMoneyString = inputMoneyField.value;
    const inputMoney = parseFloat(inputMoneyString);
    inputMoneyField.value = "";
    return inputMoney;
}

function getStoredDepositAndWithdraw(storedAmountId) {
    const storedAmount = document.getElementById(storedAmountId);
    const storedAmountString = storedAmount.innerText;
    const storedAmountInNumber = parseFloat(storedAmountString);
    return storedAmountInNumber;
}


document.getElementById("button-deposit").addEventListener("click", function () {
    const newDepositAmount = getDepositAndWithdraw("deposit-amount");
    const depositStored = getStoredDepositAndWithdraw("deposit-store")
    const currentTotalDeposit = newDepositAmount + depositStored;
    document.getElementById("deposit-store").innerText = currentTotalDeposit;
    const balanceStored = getStoredDepositAndWithdraw("balance-stored");
    const currentBalaceTotal = balanceStored + newDepositAmount;
    document.getElementById("balance-stored").innerText = currentBalaceTotal;
})