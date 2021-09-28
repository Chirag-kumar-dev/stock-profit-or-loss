var initialPrice=document.querySelector('#initial-price');
var quantityStocks=document.querySelector('#quantity-stocks');
var currentPrice=document.querySelector('#current-price');
var calculateBtn=document.querySelector('#calculate-btn')
var message=document.querySelector('#message');

function calculate(){
    ipValue=initialPrice.value;
    qsValue=quantityStocks.value;
    cpValue=currentPrice.value;
    if((ipValue || qsValue || cpValue)<=0){
        message.innerHTML="Please enter value greater than 0";
        return;
    }

    if(ipValue>cpValue){
        var loss=(ipValue-cpValue)*qsValue;
        var lossPercentage=((loss/ipValue)*100).toFixed(2);
        message.innerHTML=`Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    }else if(ipValue<cpValue){
        var profit=(cpValue-ipValue)*qsValue;
        var profitPercentage=((profit/ipValue)*100).toFixed(2);

        message.innerHTML=`Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
    }
    else{
        message.innerHTML=`No pain no gain and no gain no pain`
    }


}
calculateBtn.addEventListener('click',calculate);