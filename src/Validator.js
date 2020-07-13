'use strict';

class Validator { 
    constructor() {
        this.invalidEmail = 'Introduce a valid email';
        this.emailExists = 'This user already exists';
        this.passwordError = 'Password should contain 6 or more characters';
        this.repeatPasswordError = 'Password confirmation does not match';

        this.errors = {
            invalidEmail: this.invalidEmail,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError
        }
    }
    validateEmail = (email) => {
        if (this.emailValid(email)) {
            delete this.errors.invalidEmail;
        } else {
            this.errors.invalidEmail = this.invalidEmail;
        }
    };
    emailValid = (email) => {
        const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
        const isValid = emailRegEx.test(email);

        return isValid;
    };
    validateUniqueEmail = (newEmail) =>{
        const usersDB = db.getAllUsers();

        let emailUnique = true;

        if(usersDB.length > 0) {
            usersDB.forEach((userObj) => {
                if (userObj.email === newEmail) {
                    emailUnique = false;
                }
            })
            if(emailUnique) {
                delete this.errors.emailExists;
            } else {
                this.errors.emailExists = this.emailExists;
            }
        }
    };
    validatePassword = (password) => {
        if (password.length >= 6) {
            delete this.errors.passwordError;
        } else {
            this.errors.passwordError = this.passwordError;
        }
    };
    validateRepeatPassword = (password, passwordRepeat) => {
    if (password === passwordRepeat) {
        delete this.errors.repeatPasswordError;
    } else {
        this.errors.repeatPasswordError = this.repeatPasswordError;
        }
    };

    getErrors = () => {
        return this.errors;
    };

    resetErrors = () => {
        this.errors = {
            invalidEmail: this.invalidEmail,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError
        }
    }
}

const validator = new Validator();
