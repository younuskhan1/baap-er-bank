function getFormInputValue(inputId) {
    const formField = document.getElementById(inputId);
    const formInputValue = formField.value;
    formField.value = "";
    return formInputValue;
}

document.getElementById("button-submit").addEventListener("click", function () {
    const userEmail = getFormInputValue("user-email");
    const userPassword = getFormInputValue("user-password");
    console.log(userEmail, userPassword);
    if ((userEmail === "irfanjamil.du93rd@gmail.com") && (userPassword === "amarsonarbangla")) {
        window.location.href = "bank.html";
    } else {
        alert("You are an invalid user. Please enter the correct email and password.");
    }
})
