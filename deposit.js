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
    if (newDepositAmount < 0) {
        alert("Please provide me a positive numeric value.");
    } else if (isNaN(newDepositAmount)) {
        alert("Please fill up the input field and provide me a positive numeric value.");
    } else {
        const depositStored = getStoredDepositAndWithdraw("deposit-stored")
        const currentTotalDeposit = newDepositAmount + depositStored;
        document.getElementById("deposit-stored").innerText = currentTotalDeposit;
        const balanceStored = getStoredDepositAndWithdraw("balance-stored");
        const currentBalaceTotal = balanceStored + newDepositAmount;
        document.getElementById("balance-stored").innerText = currentBalaceTotal;
    }

})

document.getElementById("button-withdraw").addEventListener("click", function () {
    const newWithdrawAmount = getDepositAndWithdraw("withdraw-amount");
    if (newWithdrawAmount < 0) {
        alert("Please provide me a positive numeric value.");
    } else if (isNaN(newWithdrawAmount)) {
        alert("Please fill up the input field and provide me a positive numeric value.");
    } else {
        const previousWithdrawAmount = getStoredDepositAndWithdraw("withdraw-stored");
        const currentTotalBalance = getStoredDepositAndWithdraw("balance-stored");
        if (newWithdrawAmount > currentTotalBalance) {
            alert("You will not be able to withdraw more than the current balance amount")
        } else {
            const currentTotalWithdraw = newWithdrawAmount + previousWithdrawAmount;
            document.getElementById("withdraw-stored").innerText = currentTotalWithdraw;
            const reducedBalanceTotal = currentTotalBalance - newWithdrawAmount;
            document.getElementById("balance-stored").innerText = reducedBalanceTotal;
        }
    }
})