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
        alertText = textError;
        return {var1: alertText, var2: false}
    } else if (userNameValue.length < 3 ) {
        const textError = "Name must be at least 3 character.";
        setError(userName, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasSpecialCharacters(userNameValue, true)) {
        const textError = "Name cant contain special characters.";
        setError(userName, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasNumbers(userNameValue) === true) {
        const textError = "Name cant contain numbers.";
        setError(userName, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
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
        alertText = textError;
        return {var1: alertText, var2: false}
    } else if (lastNameValue.length < 3 ) {
        const textError = "Lastname must be at least 3 character."
        setError(lastName, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasSpecialCharacters(lastNameValue, false)) {
        const textError = "Lastname cant contain special characters.";
        setError(lastName, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasNumbers(lastNameValue) === true) {
        const textError = "Lastname cant contain numbers.";
        setError(lastName, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
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
        alertText = textError;
        return {var1: alertText, var2: false}
    } else if (dniValue.length < 8 ) {
        const textError = "Dni must be at least 8 characters long.";
        setError(dni, textError)
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasSpecialCharacters(dniValue, true)) {
        const textError = "Dni cant contain special characters.";
        setError(dni, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasLetters(dniValue) === true) {
        const textError = "Dni cant contain letters.";
        setError(dni, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else {
        setSuccess(dni);
        alertText = dniValue;
        return alertText;
    }
}

function validateInputTelephone() {
    const telephoneValue = telephone.value.trim();
    if (telephoneValue === '') {
        const textError = "Telephone is required.";
        setError(telephone, textError);
        alertText = textError;
        return {var1: alertText, var2: false}
    } else if (telephoneValue.length != 10 ) {
        const textError = "Telephone must be 10 characters long."
        setError(telephone, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasSpecialCharacters(telephoneValue, true)) {
        const textError = "Telephone cant contain special characters."
        setError(telephone, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasLetters(telephoneValue) === true) {
        const textError = "Telephone cant contain letters.";
        setError(telephone, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
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
        alertText = textError;
        return {var1: alertText, var2: false}
    } else if (addressValue.length < 5 ) {
        const textError = "Address must be at least 5 character.";
        setError(address, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasSpecialCharacters(addressValue, false)) {
        const textError = "Address cant contain special characters.";
        setError(address, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (!hasLetters(addressValue) === true || !hasNumbers(addressValue) === true) {
        const textError = "Address must contain numbers and letters.";
        setError(address, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
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
        alertText = textError;
        return {var1: alertText, var2: false}
    } else if (locValue.length < 4 ) {
        const textError = "Location must be at least 4 character.";
        setError(loc, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasSpecialCharacters(locValue, false)) {
        const textError = "Location cant contain special characters.";
        setError(loc, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
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
        alertText = textError;
        return {var1: alertText, var2: false}
    } else if (areaCodeValue.length < 4 || areaCodeValue.length > 5 ) {
        const textError = "Area code must be between 4 and 5.";
        setError(areaCode, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasSpecialCharacters(areaCodeValue, true)) {
        const textError = "Area code cant contain special characters.";
        setError(areaCode, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasLetters(areaCodeValue) === true) {
        const textError = "Area code cant contain letters.";
        setError(areaCode, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
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
   return {var1: alertText, var2: false}
    } else if (!isValidEmail(emailValue)) {
        const textError = "Provide a valid email address.";
        setError(email, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
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
        alertText = textError;
        return {var1: alertText, var2: false}
    } else if (passwordValue.length < 8 ) {
        const textError = "Password must be at least 8 characters.";
        setError(password, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (hasSpecialCharacters(passwordValue) || passwordValue.indexOf(' ') > 0) {
        const textError = "Password cant contain special characters.";
        setError(password, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    } else if (!hasLetters(passwordValue) === true || !hasNumbers(passwordValue) === true) {
        const textError = "Password must contain numbers and letters.";
        setError(password, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
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
        alertText = textError;
        return {var1: alertText, var2: false}
    } else if (passwordRepeatValue === passwordValue) {
        setSuccess(passwordRepeat);
        alertText = passwordRepeatValue;
        return alertText;
    } else {
        const textError = "Password do not match.";
        setError(passwordRepeat, textError);
        alertText = textError;
   return {var1: alertText, var2: false}
    }
}

function validateInputBirthday() {
    const birthdayValue = birthday.value.trim();
    var dateEl = birthdayValue.split('-');
    var formattedDate = dateEl[2] + '/' + dateEl[1] + '/' + dateEl[0];
    if (birthdayValue === '') {
        const textError = "Birthday is required.";
        setError(birthday, textError);
        alertText = textError;
        return {var1: alertText, var2: false}
    } else {
        setSuccess(birthday);
        alertText = formattedDate;
        return alertText;
    }
}

function loginRequest() {
    var nameValue = document.getElementById("name").value;
    var surnameValue = document.getElementById("lastName").value;
    var dniValue = document.getElementById("dni").value;
    var birthValue = document.getElementById("birthday").value;
    var birthValueSplit = birthValue.split("-");
    var formattedBirthValue = birthValueSplit[1] + "/" + birthValueSplit[2] + "/" + birthValueSplit[0];
    var phoneValue = document.getElementById("telephone").value;
    var addressValue = document.getElementById("address").value;
    var cityValue = document.getElementById("location").value;
    var codeValue = document.getElementById("areaCode").value;
    var passwordValue = document.getElementById("password").value;
    var emailValue = document.getElementById("email").value;
    console.log({dniValue})

    const url = "https://api-rest-server.vercel.app/signup?name=" + nameValue + "&lastName="
    + surnameValue + "&dni=" + dniValue + "&dob=" + formattedBirthValue + "&phone=" + phoneValue +
    "&address=" + addressValue + "&city=" + cityValue + "&zip=" + codeValue +
    "&email=" + emailValue + "&password=" + passwordValue
    fetch(url)
        .then(function(response) {
        if (response.status === 404) {
            alert("There was an error while submitting the request." + " " + "Error type: " + response.status);
            throw new Error("Request error.");
        } else {
            return response.json();
        }
    })
    .then(function(data) {
        alert(`The request was successfully completed.` + " " + data.msg);
        localStorage.setItem("name", nameValue);
        localStorage.setItem("surname", surnameValue);
        localStorage.setItem("dni", dniValue);
        localStorage.setItem("dob", birthValue);
        localStorage.setItem("phone", phoneValue);
        localStorage.setItem("address", addressValue);
        localStorage.setItem("city", cityValue);
        localStorage.setItem("zip", codeValue);
        localStorage.setItem("email", emailValue);
        localStorage.setItem("password", passwordValue);
    })
    .catch(function(error) {
        console.error(error);
    })
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
    validateInputPasswordRepeat();
    innerAlert += alertText + "\n";
    validateInputBirthday();
    innerAlert += alertText + "\n";
    alert(innerAlert);

    const isValidName = validateInputName();
    const isValidLastName = validateInputLastname();
    const isValidDni = validateInputDni();
    const isValidBirthday = validateInputBirthday();
    const isValidTelephone = validateInputTelephone();
    const isValidAddress = validateInputAddress();
    const isValidLoc = validateInputLocation();
    const isValidAreaCode = validateInputAreaCode();
    const isValidEmail = validateInputEmail();
    const isValidPassword = validateInputPassword();
    const isValidPasswordRepeat = validateInputPasswordRepeat();

    if (isValidName.var2 === false || isValidLastName.var2 === false || isValidDni.var2 === false ||
        isValidBirthday.var2 === false || isValidTelephone.var2 === false || isValidAddress.var2 === false ||
        isValidLoc.var2 === false || isValidAreaCode.var2 === false || isValidEmail.var2 === false || isValidPassword.var2 === false ||
        isValidPasswordRepeat.var2 === false) {
    } else {
        loginRequest()
    }
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

window.onload = function() {
    if (localStorage.getItem('name')) {
        userName.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('surname')) {
        lastName.value = localStorage.getItem('surname');
    }
    if (localStorage.getItem('dni')) {
        dni.value = parseInt(localStorage.getItem('dni'));
    }
    if (localStorage.getItem('dob')) {
        birthday.value = localStorage.getItem('dob');
    }
    if (localStorage.getItem('phone')) {
        telephone.value = parseInt(localStorage.getItem('phone'));
    }
    if (localStorage.getItem('address')) {
        address.value = localStorage.getItem('address');
    }
    if (localStorage.getItem('city')) {
        loc.value = localStorage.getItem('city');
    }
    if (localStorage.getItem('zip')) {
        areaCode.value = parseInt(localStorage.getItem('zip'));
    }
    if (localStorage.getItem('email')) {
        email.value = localStorage.getItem('email');
    }
};
