let bill = 0
let tiPercentage = 0
let numberOfpeople = 0


let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue() {
    bill = billInput.valueAsnumber
    calculate()
    
}



let numberOfpeopleinput = document.querySelector("#people")
numberOfpeopleinput.addEventListener("input", receiveNumberOfpeople)

function receiveNumberOfpeople() {
numberOfpeople = numberOfpeopleInput.valueAsnumber
calculate()
}

function receiveTipPercentage(value) {
    let buttonSelected = document.querySelector()
}


function calculate() {
    if (bill !== 0 && tiPercentage !== 0 && numberOfpeople !== 0){
    } else {
        console.log("ainda não é possível calcular")
    }
        
    
}