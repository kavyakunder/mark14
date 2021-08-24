// alert("helo");
var initialPrice=document.querySelector("#initialPrice");
var quantityStocks=document.querySelector("#quantityStocks");
var currentPrice=document.querySelector("#currentPrice");
var btn=document.querySelector("#btn");
var outputBox=document.querySelector("#outputBox");

btn.addEventListener('click',submitHandler);

function submitHandler()
{
  var ip=Number(initialPrice.value);
  var qty=Number(quantityStocks.value);
  var cp=Number(currentPrice.value);
  profitOrLoss(ip,qty,cp)
}



function profitOrLoss(initial,quantity,current)
{
  if(initial>current)
  {
    //loss

    var loss=(initial-current)*quantity;
var lossPercentage=((loss/initial)*100).toFixed(2);
showOutput("Here Loss is "+loss+ " and Loss Percentage is "+lossPercentage+"%");

  }
  else if(current>initial)
  {
    //tie
    var profit=(current-initial)*quantity;
var profitPercentage=((profit/initial)*100).toFixed(2);
// console.log("")
showOutput("Here Profit is "+profit+" and Profit Percentage is "+profitPercentage +"%");

  }
  else
  {
    //profit
    showOutput("No pain no gain,no gain no pain")
  }
}
function showOutput(message)
{
  // switch(status)
  // case 1:
  //
  outputBox.innerHTML=message;
}
// profitOrLoss(1000,10,10);
// profitOrLoss(10,100,100)
// profitOrLoss(100,46,100)
