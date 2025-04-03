let bill = 0
let tiPercentage = 0
let numberOfpeople = 0
let buttonSelected = null

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
if (buttonSelected !== null) {
    buttonSelected.classList.remove("button-selected")
}

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    tipPercentege = value / 100

    let customTipInput = document.querySelector("#custom-tip")
    customTipInput.value = ""

    calculate()

}

function receiveCustomTipPercentege() {
    let customTipInput = document.querySelector("#custom-tip")
    tipPercentage = customTipInput.valueAsnumber / 100

   if (buttonSelected !== null) {
     
    buttonSelected.classList.remove("button-selected")
    buttonSelected = null


}

    calculete()
}

function calculate() {
    if (bill !== 0 && tiPercentage !== 0 && numberOfpeople !== 0){

        let tipAmountStrong = document.querySelector(".amount strong")

        let tipAmountPerson = (bill * tipPerccentege) / numberOfPeople

        tipAmountStrong.innerText = `$ ${tipAmountPerson.toFixed(2)}`

        let totalStrong = document.querySelector(".total strong")

        let total = (bill / numberOfPeople) + tipAmountPerson

        totalStrong.innerText = `$ ${total.toFixed(2)}`
    } else {
        console.log("ainda não é possível calcular")
    }
        
    
}