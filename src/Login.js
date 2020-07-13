'use strict';

class Login {
    constructor() {
      this.emailInput = document.querySelector("#email");
      this.passwordInput = document.querySelector("#password");
  
      this.loginButton = document.querySelector("#login-button");
      this.messageContainer = document.querySelector(".message-container");
      this.successContainer = document.querySelector(".success-container");
    };

submit = (event) => {
    event.preventDefault();

    const usersDB = db.getAllUsers();

    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    const user = usersDB.find((userObj) => {
    if (userObj.email === email && userObj.password === password) {
        return true;
        }
    })
    this.showMessage(user);
};

showMessage = (user) => {
    this.messageContainer.innerHTML = "";
    const message = document.createElement('p');

    if (user) {
      message.innerHTML = `Hi, ${user.name}`;
      this.successContainer.appendChild(message);
    }
    else {
      message.innerHTML = 'Invalid email or password';
      this.messageContainer.appendChild(message);
    }


    if (user) this.redirect();
  }

  redirect = () => {
    setTimeout(() => location.assign('index.html'), 2000);
  }
}

const login = new Login();

login.loginButton.addEventListener("click", login.submit);