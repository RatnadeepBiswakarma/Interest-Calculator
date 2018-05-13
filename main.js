function calculateMe() {
    var interestRate = parseInt(document.getElementById("int-rate").value);
    var totalAmount = parseInt(document.getElementById("raw-amount").value);
    var period = document.getElementById("rate-type").value;
    let months = document.getElementById("months").value;
    if ((period === "Monthly") && (totalAmount > 0) && (interestRate > 0)) {
        document.getElementById("per-months").innerHTML = ((totalAmount * interestRate) / 100);
        document.getElementById("total-interest").innerHTML = (((totalAmount * interestRate) / 100) * months);
        document.getElementById("subtotal").innerHTML = parseInt((((totalAmount * interestRate) / 100) * months) + totalAmount);
    } else {
        document.getElementById("alert").innerHTML = "Please provide above information correctly.";
    }
}