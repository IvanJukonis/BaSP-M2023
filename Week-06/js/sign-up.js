const userName = document.getElementById("name");
const lastName= document.getElementById("lastName");
const dni = document.getElementById("dni");
const birthday = document.getElementById("birthday");
const telephone = document.getElementById("telephone");
const address = document.getElementById("address");
const loc = document.getElementById("location");
const areaCode = document.getElementById("areaCode");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordRepeat = document.getElementById("passwordRepeat");
const register = document.getElementById("form-button-register");

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

function hasSpecialCharacters(text, space) {
    var spChar;
    if (space) {
        var spChar = "/[[]#$%^&*()_+-=[]{};':\|,.<>/?]+/! ";
    } else {
        var spChar = "/[[]#$%^&*()_+-=[]{};':\|,.<>/?]+/!";
    }
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

function hasNumbers(text) {
    for(i = 0; i < text.length; i++) {
        if (numbers.indexOf(text.charAt(i),0) != -1) {
            return true;
        }
    }
    return false;
}

function validateInputName() {
    const userNameValue = userName.value.trim();
    if (userNameValue === '') {
        const textError = "Name is required.";
        setError(userName, textError);
        return alertText = textError;
    } else if (userNameValue.length < 3 ) {
        const textError = "Name must be at least 3 character.";
        setError(userName, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(userNameValue, false)) {
        const textError = "Name cant contain special characters.";
        setError(userName, textError);
        alertText = textError;
        return alertText;
    } else if (hasNumbers(userNameValue) === true) {
        const textError = "Name cant contain numbers.";
        setError(userName, textError);
        alertText = textError;
        return alertText;
    } else {
        setSuccess(userName);
        alertText = userNameValue;
        return alertText;
    }
}

function validateInputLastname() {
    const lastNameValue = lastName.value.trim();
    if (lastNameValue === '') {
        const textError = "Lastname is required."
        setError(lastName, textError);
        return alertText = textError;
    } else if (lastNameValue.length < 3 ) {
        const textError = "Lastname must be at least 3 character."
        setError(lastName, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(lastNameValue, false)) {
        const textError = "Lastname cant contain special characters.";
        setError(lastName, textError);
        alertText = textError;
        return alertText;
    } else if (hasNumbers(lastNameValue) === true) {
        const textError = "Lastname cant contain numbers.";
        setError(lastName, textError);
        alertText = textError;
        return alertText;
    } else {
        setSuccess(lastName);
        alertText = lastNameValue;
        return alertText;
    }
}

function validateInputDni() {
    const dniValue = dni.value.trim();
    if (dniValue === '') {
        const textError = "Dni is required.";
        setError(dni, textError);
        return alertText = textError;
    } else if (dniValue.length < 8 ) {
        const textError = "Dni must be at least 8 characters long.";
        setError(dni, textError)
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(dniValue, true)) {
        const textError = "Dni cant contain special characters.";
        setError(dni, textError);
        alertText = textError;
        return alertText;
    } else if (hasLetters(dniValue) === true) {
        const textError = "Dni cant contain letters.";
        setError(dni, textError);
        alertText = textError;
        return alertText;
    } else {
        setSuccess(dni);
        alertText = dniValue;
        return alertTextDniSuccess;
    }
}

function validateInputTelephone() {
    const telephoneValue = telephone.value.trim();
    if (telephoneValue === '') {
        const textError = "Telephone is required.";
        setError(telephone, textError);
        return alertText = textError;
    } else if (telephoneValue.length != 10 ) {
        const textError = "Telephone must be at least 10 characters long."
        setError(telephone, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(telephoneValue, true)) {
        const textError = "Telephone cant contain special characters."
        setError(telephone, textError);
        alertText = textError;
        return alertText;
    } else if (hasLetters(telephoneValue) === true) {
        const textError = "Telephone cant contain letters.";
        setError(telephone, textError);
        alertText = textError;
        return alertText;
    } else {
        setSuccess(telephone);
        alertText = telephoneValue;
        return alertText;
    }
}

function validateInputAddress() {
    const addressValue = address.value.trim();
    if (addressValue === '') {
        const textError = "Address is required.";
        setError(address, textError);
        return alertText = textError;
    } else if (addressValue.length < 5 ) {
        const textError = "Address must be at least 5 character.";
        setError(address, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(addressValue, false)) {
        const textError = "Address cant contain special characters.";
        setError(address, textError);
        alertText = textError;
        return alertText;
    } else if (!hasLetters(addressValue) === true || !hasNumbers(addressValue) === true) {
        const textError = "Address must contain numbers and letters.";
        setError(address, textError);
        alertText = textError;
        return alertText;
    } else {
        setSuccess(address);
        alertText = addressValue;
        return alertText;
    }
}

function validateInputLocation() {
    const locValue = loc.value.trim();
    if (locValue === '') {
        const textError = "Location is required.";
        setError(loc, textError);
        return alertText = textError;
    } else if (locValue.length < 3 ) {
        const textError = "Location must be at least 3 character.";
        setError(loc, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(locValue, false)) {
        const textError = "Location cant contain special characters.";
        setError(loc, textError);
        alertText = textError;
        return alertText;
    } else {
        setSuccess(loc);
        alertText = locValue;
        return alertText;
    }
}

function validateInputAreaCode() {
    const areaCodeValue = areaCode.value.trim();
    if (areaCodeValue === '') {
        const textError = "Area code is required.";
        setError(areaCode, textError);
        return alertText = textError;
    } else if (areaCodeValue.length < 4 || areaCodeValue.length > 5 ) {
        const textError = "Area code must be between 4 and 5.";
        setError(areaCode, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(areaCodeValue, true)) {
        const textError = "Area code cant contain special characters.";
        setError(areaCode, textError);
        alertText = textError;
        return alertText;
    } else if (hasLetters(areaCodeValue) === true) {
        const textError = "Area code cant contain letters.";
        setError(areaCode, textError);
        alertText = textError;
        return alertText;
    } else {
        setSuccess(areaCode);
        alertText = areaCodeValue;
        return alertText;
    }
}

function validateInputEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        const textError = "Email is required.";
        setError(email, textError);
        alertText = textError;
        return alertText;
    } else if (!isValidEmail(emailValue)) {
        const textError = "Provide a valid email address.";
        setError(email, textError);
        alertText = textError;
        return alertText;
    } else {
        setSuccess(email);
        alertText = emailValue;
        return alertText;
    }
}

function validateInputPassword() {
    const passwordValue = password.value.trim();
    if (passwordValue === '') {
        const textError = "Password is required.";
        setError(password, textError);
        return alertText = textError;
    } else if (passwordValue.length < 8 ) {
        const textError = "Password must be at least 8 characters.";
        setError(password, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(passwordValue) || passwordValue.indexOf(' ') > 0) {
        const textError = "Password cant contain special characters.";
        setError(password, textError);
        alertText = textError;
        return alertText;
    } else if (!hasLetters(passwordValue) === true || !hasNumbers(passwordValue) === true) {
        const textError = "Password must contain numbers and letters.";
        setError(password, textError);
        alertText = textError;
        return alertText;
    } else {
        setSuccess(password);
        alertText = passwordValue;
        return alertText;
    }
}

function validateInputPasswordRepeat() {
    const passwordRepeatValue = passwordRepeat.value.trim();
    const passwordValue = password.value.trim();
    if (passwordRepeatValue === '') {
        const textError = "Password repetition is required.";
        setError(passwordRepeat, textError);
        return alertText = textError;
    } else if (passwordRepeatValue === passwordValue) {
        setSuccess(passwordRepeat);
        alertText = passwordRepeatValue;
        return alertText;
    } else {
        const textError = "Password do not match.";
        setError(passwordRepeat, textError);
        alertText = textError;
        return alertText;
    }
}

function validateInputBirthday() {
    const birthdayValue = birthday.value.trim();
    var dateEl = birthdayValue.split('-');
    var formattedDate = dateEl[2] + '/' + dateEl[1] + '/' + dateEl[0];
    if (birthdayValue === '') {
        const textError = "Birthday is required.";
        setError(birthday, textError);
        return alertText = textError;
    } else {
        setSuccess(birthday);
        alertText = formattedDate;
        return alertText;
    }
}

function submitForm() {
    var innerAlert = "";
    validateInputName();
    innerAlert += alertText + "\n";
    validateInputLastname();
    innerAlert += alertText + "\n";
    validateInputDni();
    innerAlert += alertText + "\n";
    validateInputTelephone();
    innerAlert += alertText + "\n";
    validateInputAddress();
    innerAlert += alertText + "\n";
    validateInputLocation();
    innerAlert += alertText + "\n";
    validateInputAreaCode();
    innerAlert += alertText + "\n";
    validateInputEmail();
    innerAlert += alertText + "\n";
    validateInputPassword();
    innerAlert += alertText + "\n";
    validateInputEmail();
    innerAlert += alertText + "\n";
    validateInputPasswordRepeat();
    innerAlert += alertText + "\n";
    validateInputBirthday();
    innerAlert += alertText + "\n";
    alert(innerAlert);
}

userName.addEventListener("blur", validateInputName);
userName.addEventListener("focus", function e() {setSuccess(userName)});
lastName.addEventListener("blur", validateInputLastname);
lastName.addEventListener("focus", function e() {setSuccess(lastName)});
dni.addEventListener("blur", validateInputDni);
dni.addEventListener("focus", function e() {setSuccess(dni)});
telephone.addEventListener("blur", validateInputTelephone);
telephone.addEventListener("focus", function e() {setSuccess(telephone)});
address.addEventListener("blur", validateInputAddress);
address.addEventListener("focus", function e() {setSuccess(address)});
loc.addEventListener("blur", validateInputLocation);
loc.addEventListener("focus", function e() {setSuccess(loc)});
areaCode.addEventListener("blur", validateInputAreaCode);
areaCode.addEventListener("focus", function e() {setSuccess(areaCode)});
email.addEventListener("blur", validateInputEmail);
email.addEventListener("focus", function e() {setSuccess(email)});
password.addEventListener("blur", validateInputPassword);
password.addEventListener("focus", function e() {setSuccess(password)});
passwordRepeat.addEventListener("blur", validateInputPasswordRepeat);
passwordRepeat.addEventListener("focus", function e() {setSuccess(passwordRepeat)});
birthday.addEventListener("blur", validateInputBirthday);
birthday.addEventListener("focus", function e() {setSuccess(birthday)});
register.addEventListener("click", submitForm);