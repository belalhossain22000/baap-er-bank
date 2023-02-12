document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFild = document.getElementById('withdraw-field');
    const withdrawVal =withdrawFild.value;
    const mainwithdrawVal = parseFloat(withdrawVal);


    const widrawTotal = document.getElementById('withdraw-total');
    const currentWithdraw = widrawTotal.innerText;
    const mainwithdrawValu = parseFloat(currentWithdraw);
    const currentDepositTotals= mainwithdrawVal+mainwithdrawValu
    widrawTotal.innerText = currentDepositTotals;

    const totalBlance = document.getElementById('balance-total');
    const totalBlances =totalBlance.innerText;
    const currentBalanceTotal = parseFloat(totalBlances);
    const totalCrruentBlance = currentBalanceTotal-mainwithdrawVal;
    totalBlance.innerText=totalCrruentBlance;
})