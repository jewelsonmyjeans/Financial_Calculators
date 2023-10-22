const calculateBtn = document.getElementById('calculate-btn')
calculateBtn.addEventListener('click', function() {
    calculateCDReturn()
})


function displayTotalReturn(totalReturn) {
    const resultEl = document.getElementById("total-return")
    resultEl.textContent = `Total Return: $${totalReturn.toFixed(2)}`
}

function calculateCDReturn() {
    const depositAmount = parseFloat(document.getElementById("deposit-amount").value)
    const apy = parseFloat(document.getElementById("apy").value) / 100
    const cdTerm = parseFloat(document.getElementById("cd-term").value)

    const totalReturn = depositAmount + (depositAmount * apy * cdTerm / 12)
    displayTotalReturn(totalReturn)

}
