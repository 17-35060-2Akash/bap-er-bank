document.getElementById('btn-deposit').addEventListener('click', function (event) {
    const newdepositAmount = document.getElementById('amount-deposit').value;
    if (isNaN(parseFloat(newdepositAmount))) {
        alert('Please Enter a valid Deposit Amount!');
        document.getElementById('amount-deposit').value = '';
    }
    else {
        const prevDepositElement = document.getElementById('deposit-total');
        const prevDepositTotal = prevDepositElement.innerText;
        // console.log(depositTotal);
        const currentDepositTotal = parseFloat(prevDepositTotal) + parseFloat(newdepositAmount);

        prevDepositElement.innerText = currentDepositTotal;
        /////
        const prevBalanceTotalElement = document.getElementById('balance-total');
        const prevBalanceTotal = parseFloat(prevBalanceTotalElement.innerText);

        const currentBalanceTotal = prevBalanceTotal + parseFloat(newdepositAmount);

        prevBalanceTotalElement.innerText = currentBalanceTotal;




        document.getElementById('amount-deposit').value = '';
    }


})