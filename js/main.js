function calculateMe() {
    var interestRate = parseInt(document.getElementById("int-rate").value);
    var totalAmount = parseInt(document.getElementById("raw-amount").value);
    var period = document.getElementById("rate-type").value;
    let months = document.getElementById("months").value;
    if ((period === "Monthly") && (totalAmount > 0) && (interestRate > 0)) {
        document.getElementById("per-months").innerHTML = ((totalAmount * interestRate) / 100).toFixed(2);
        document.getElementById("total-interest").innerHTML = (((totalAmount * interestRate) / 100) * months).toFixed(2);
        document.getElementById("subtotal").innerHTML = ((((totalAmount * interestRate) / 100) * months) + totalAmount).toFixed(2);
    } else {
        document.getElementById("alert").innerHTML = "Please provide above information correctly.";
    }
}