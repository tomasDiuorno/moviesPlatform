let annualBtn = document.getElementById('annual-btn');
let monthlyBtn = document.getElementById('monthly-btn');

monthlyBtn.addEventListener('click', changeMonthlyPrice);
annualBtn.addEventListener('click', changeAnnualPrice);


function changeAnnualPrice(){
    let priceOne = document.getElementById('plan-price-1');
    let priceTwo = document.getElementById('plan-price-2');
    let priceThree = document.getElementById('plan-price-3');
    
    monthlyBtn.style.color = "#8a8a8a"
    annualBtn.style.color = "#f5f5f5"
    priceOne.innerText = "ARS 35,990.00/mes"
    priceTwo.innerText = "ARS 44,990.00/mes"
    priceThree.innerText = "ARS 53,990.00/mes"
}

function changeMonthlyPrice(){
    let priceOne = document.getElementById('plan-price-1');
    let priceTwo = document.getElementById('plan-price-2');
    let priceThree = document.getElementById('plan-price-3');

    annualBtn.style.color = "#8a8a8a"
    monthlyBtn.style.color = "#f5f5f5"
    priceOne.innerText = "ARS 3,599.00/mes"
    priceTwo.innerText = "ARS 4,499.00/mes"
    priceThree.innerText = "ARS 5,399.00/mes"

}