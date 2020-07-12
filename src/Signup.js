'use strict';

class Signup {
    constructor() {
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeat-password");

        this.buttonInput = document.querySelector("#signup-button");
        this.errorWrapper = document.querySelector(".message-container")
    }

    handleEmail = (event) => {
        const email = event.target.value;

        console.log('email', email);
    }
    handlePassword = (event) => {
        const password = event.target.value;

        console.log('password', password);
    }
    handleRepeatPassword = (event) => {
        const repeatPassword = event.target.value;

        console.log('repeatPassword', repeatPassword);
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
    }

    addListeners = () => {
        this.emailInput.addEventListener("input", this.handleEmail);
        this.passwordInput.addEventListener("input", this.handlePassword);
        this.repeatPasswordInput.addEventListener("input", this.handleRepeatPassword);
        this.buttonInput.addEventListener("click", this.saveData);
    }
};

const signup = new Signup();

window.addEventListener("load", signup.addListeners);