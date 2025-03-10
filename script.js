function calculatePercentage() {
    let amount = document.getElementById("amount").value;
    
    if (amount === "" || isNaN(amount)) {
        alert("Please enter a valid number.");
        return;
    }

    amount = parseFloat(amount);
    
    document.getElementById("percent30").innerText = (amount * 0.30).toFixed(2);
    document.getElementById("percent50").innerText = (amount * 0.50).toFixed(2);
    document.getElementById("percent20").innerText = (amount * 0.20).toFixed(2);
}
