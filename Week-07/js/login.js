const email = document.getElementById("form-email");
const password = document.getElementById("form-password");
const login = document.getElementById("login-form-button");

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.remove("error");
    inputControl.classList.add("success");
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var numbers = "0123456789";
var letters = "abcdefghyjklmnñopqrstuvwxyz";

function hasSpecialCharacters(text) {
    let spChar = "/[[]#$%^&*()_+-=[]{};':\|,.<>/?]+/! ";
    for (var i = 0; i < text.length; i++) {
        if (spChar.indexOf(text.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}

function hasLetters(text) {
    text = text.toLowerCase();
    for (i = 0; i < text.length; i++) {
        if (letters.indexOf(text.charAt(i), 0) != -1) {
            return true;
        }
    }
    return false;
}

function hasNumbers(text){
    for (i = 0; i < text.length; i++) {
        if (numbers.indexOf(text.charAt(i), 0) != -1){
            return true;
        }
    }
    return false;
}


function validateInputEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        const textError = "Email is required.";
        setError(email, textError);
        alertTextEmailError = textError;
        return alertTextEmailError;
    } else if (!isValidEmail(emailValue)) {
        const textError = "Provide a valid email address.";
        setError(email, textError);
        alertTextEmailError = textError;
        return alertTextEmailError;
    } else {
        setSuccess(email);
        alertTextEmailSuccess = emailValue;
        return alertTextEmailSuccess;
    }
}

function validateInputPassword() {
    const passwordValue = password.value.trim();
    if (passwordValue === '') {
        const textError = "Password is required.";
        setError(password, textError);
        return alertTextPasswordError = textError;
    } else if (passwordValue.length < 8 ) {
        const textError = "Password must be at least 8 character.";
        setError(password, textError);
        alertTextPasswordError = textError;
        return alertTextPasswordError;
    } else if (hasSpecialCharacters(passwordValue) || passwordValue.indexOf(' ') > 0) {
        const textError = "Password cant contain special characters.";
        setError(password, textError);
        alertTextPasswordError = textError;
        return alertTextPasswordError;
    } else if (!hasLetters(passwordValue) === true || !hasNumbers(passwordValue) === true) {
        const textError = "Password must contain numbers and letters.";
        setError(password, textError);
        alertTextPasswordError = textError;
        return alertTextPasswordError;
    } else {
        setSuccess(password);
        alertTextPasswordSuccess = passwordValue;
        return alertTextPasswordSuccess;
    }
}

function loginRequest() {
    const url = "https://api-rest-server.vercel.app/login";
    const queryParams = `?email=${email.value}&password=${password.value}`;
    fetch(url + queryParams)
        .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            alert("There was an error while submitting the request." + " " +
            "Error type: " + response.status + "\n" + "User or Password incorrect.");
            throw new Error("Request error.");
        }
    })
    .then(function(data) {
        alert(`The request was successfully completed.` + " " + data.msg);
        alert("Welcome to MEGAROCKEYGYM" + "\n" + alertTextPasswordSuccess + "\n" + alertTextEmailSuccess);
    })
    .catch(function(error) {
        console.error(error);
    });
}

function submitForm() {
    validateInputEmail();
    validateInputPassword();
    const parentEmail = email.parentElement;
    const parentPassword = password.parentElement;
    const valEmailError = parentEmail.classList.contains("error");
    const valPasswordError = parentPassword.classList.contains("error");
    if (valEmailError && valPasswordError) {
        alert("Login error" + "\n" + alertTextPasswordError + "\n" + alertTextEmailError);
    } else if (valEmailError) {
        alert("Email Error" + "\n" + alertTextPasswordSuccess + "\n" + alertTextEmailError);
    } else if (valPasswordError) {
        alert("Password Error" + "\n" + alertTextPasswordError + "\n" + alertTextEmailSuccess);
    } else {
        loginRequest();
    }
}

email.addEventListener("blur", validateInputEmail);
email.addEventListener("focus", function e() {setSuccess(email)});
password.addEventListener("blur", validateInputPassword);
password.addEventListener("focus", function e() {setSuccess(password)});
login.addEventListener("click", submitForm);

