document.getElementById('btn-deposit').addEventListener('click',function(){
    const dipositFild = document.getElementById('deposit-field')
    const deposit = dipositFild.value;
    const maindeposit = parseFloat(deposit);
    

    const depositelement = document.getElementById('deposit-total');
    const totalDiposit = depositelement.innerText;
    const mainPD = parseFloat(totalDiposit);
    const alldiposit =  maindeposit+ mainPD;
    depositelement.innerHTML=alldiposit;


    const totalBlance = document.getElementById('balance-total');
    const totalBlances =totalBlance.innerText;
    const currentBalanceTotal = parseFloat(totalBlances);
    const mainTotalBlance = currentBalanceTotal+ maindeposit 
    totalBlance.innerText=mainTotalBlance;
})