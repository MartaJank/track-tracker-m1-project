'use strict';

class Signup {
    constructor() {
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeat-password");

        this.buttonInput = document.querySelector("#signup-button");
        this.errorWrapper = document.querySelector(".message-container")
        this.successWrapper = document.querySelector(".success-container")
    }

    handleEmail = (event) => {
        const email = event.target.value;

        validator.validateEmail(email);

        const errors = validator.getErrors();
        if (!errors.invalidEmail) {
            validator.validateUniqueEmail(email);
        } 
        this.setErrorMessages();
    }
    handlePassword = (event) => {
        const password = event.target.value;
        const passwordRepeat = this.repeatPasswordInput.value;

        validator.validatePassword(password);
        validator.validateRepeatPassword(password, passwordRepeat);

        this.setErrorMessages();
    }
    handleRepeatPassword = (event) => {
        const passwordRepeat = event.target.value;
        const password = this.passwordInput.value;

        validator.validatePassword(password);
        validator.validateRepeatPassword(password, passwordRepeat);

        this.setErrorMessages();
    }
    
    saveData = (event) => {
        event.preventDefault();
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        
        const newUser = new User(name, email, password);

        db.saveNewUser(newUser);

        this.nameInput.value = "";
        this.emailInput.value = "";
        this.passwordInput.value = "";
        this.repeatPasswordInput.value = "";

        this.showSuccessMessage();
        this.removeMessages();
    }

    addListeners = () => {
        this.emailInput.addEventListener("input", this.handleEmail);
        this.passwordInput.addEventListener("input", this.handlePassword);
        this.repeatPasswordInput.addEventListener("input", this.handleRepeatPassword);
        this.buttonInput.addEventListener("click", this.saveData);
    }

    showSuccessMessage = () => {
        this.errorWrapper.innerHTML = "";

        const errorsObj = validator.getErrors();
        const errorsStringsArr = Object.values(errorsObj);

        if (errorsStringsArr.length > 0) {
            return;
        } 

        const successMsgP = document.createElement('p');
        successMsgP.innerHTML = 'You have successfully signed up!';

        this.successWrapper.appendChild(successMsgP);
    }

    removeMessages = () => {
        setTimeout( () => {
            this.successWrapper.innerHTML = "";
        }, 2000)
    };

    setErrorMessages = () => {
        this.errorWrapper.innerHTML = "";
        const errorsObj = validator.getErrors();
        const errorsStringsArr = Object.values(errorsObj);

        errorsStringsArr.forEach((errorStr) => {
            const errorMsgP = document.createElement('p');
            errorMsgP.innerHTML = errorStr;

            this.errorWrapper.appendChild(errorMsgP);
        })
    }
};

const signup = new Signup();

window.addEventListener("load", signup.addListeners);