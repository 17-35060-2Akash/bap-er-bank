document.getElementById('btn-withdraw').addEventListener('click', function (event) {
    const newWithdrawAmountElement = document.getElementById('amount-withdraw');
    const newWithdrawAmount = parseFloat(newWithdrawAmountElement.value);
    if (isNaN(newWithdrawAmount)) {
        alert('Please Enter a valid Withdrawl Amount!');
        newWithdrawAmountElement.value = '';
        return;
    }


    const prevWithdrawAmountElement = document.getElementById('withdraw-total');
    const prevWithdrawAmount = parseFloat(prevWithdrawAmountElement.innerText);

    const prevTotalBalanceElement = document.getElementById('balance-total');
    const prevTotalBalance = parseFloat(prevTotalBalanceElement.innerText);

    if (prevTotalBalance > newWithdrawAmount) {

        const newTotalWithdrawAmount = prevWithdrawAmount + newWithdrawAmount;
        prevWithdrawAmountElement.innerText = newTotalWithdrawAmount;

        const newTotalBalance = prevTotalBalance - newWithdrawAmount;
        prevTotalBalanceElement.innerText = newTotalBalance;

        newWithdrawAmountElement.value = '';
    }
    else {
        alert('Insufficiant Balance! Your Total Balance is: ' + document.getElementById('balance-total').innerText + ' $');
    }

})