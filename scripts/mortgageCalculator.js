const calculateBtn = document.getElementById('calculate-btn')

calculateBtn.addEventListener("click", function() {
    calculateMonthlyPayment()
})

function calculateMonthlyPayment() {
    const homePrice = parseFloat(document.getElementById("home-price").value)
    const downPayment = parseFloat(document.getElementById("down-payment").value)
    const loanTerm = parseFloat(document.getElementById("loan-term").value)
    const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100

    const principal = homePrice - downPayment
    const monthlyInterestRate = interestRate / 12
    const numberOfPayments = loanTerm * 12

    if (interestRate === 0) {
        const monthlyPayment = principal / numberOfPayments
        displayMonthlyPayment(monthlyPayment)
    } else {
        const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
        displayMonthlyPayment(monthlyPayment)
    }

    function displayMonthlyPayment(monthlyPayment) {
        const resultElement = document.getElementById("monthly-payment-result")
        resultElement.textContent = `Monthly Payment $${monthlyPayment.toFixed(2)}`
    }

}
