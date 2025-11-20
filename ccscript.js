//const BASE_URL ="https://api.exchangerate.host/convert"

const BASE_URL ="https://v6.exchangerate-api.com/v6/872c5f6857c808934d61cb45/latest"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

const msg = document.querySelector(".msg");



for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if(select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name == "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        
        select.append(newOption);
    }

    select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;

    if (amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }

    // Fetch UPI code //

    const URL = `${BASE_URL}/${fromCurr.value.toUpperCase()}`;
    //const URL = BASE_URL;
    let response = await fetch (URL);
    let data = await response.json();
    let convertRate = data.conversion_rates;
    let destCur = toCurr.value;
   // let data = await response.conversion_rates;

     //console.log(response.conversion_rates(INR));
    
   // let rate = data[toCurr.conversion_rates.toUpperCase()];
    // console.log(data[fromCurr.conversion_rates.toUpperCase()]);

   //console.log("data.conversion_rates.",toCurr.value);

    let rate = convertRate.INR;
    //console.log(rate);

    let finalAmount = amtVal * rate;
    
    //console.log(amtVal);
    msg.innerText = `${amtVal}${fromCurr.value} = ${finalAmount}${toCurr.value}`;
};


const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});



window.addEventListener("load", () =>{
       updateExchangeRate();
});