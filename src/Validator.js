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
    validateEmail = (email) => {}
    emailValid = (email) => {}
    validatePassword = (password) => {}
    validateRepeatPassword = (password) => {}

    getErrors = () => {
        return this.errors;
    }
}

const validator = new Validator();
