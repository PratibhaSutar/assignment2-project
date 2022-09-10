import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailMessage = "";
  passwordMessage = "";

  email = "";
  password = "";

  login() {
    this.emailMessage = "";
    this.passwordMessage = "";

    if (this.email.trim() == "") {
      this.emailMessage = "Please Enter email";
    }
    if (this.password.trim() == "") {
      this.passwordMessage = "Please Enter password";
    }

    //const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regularExpression = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (!regularExpression.test(String(this.email).toLowerCase())) {
      this.emailMessage = "Enter valid Email";
    }

    const pwdExpression = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (!pwdExpression.test(String(this.password).toLowerCase())) {
      this.passwordMessage = "Enter valid Password";

    }
    let tasks;

    let storedEmail = localStorage.getItem('email');
    let storedPw = localStorage.getItem('password');
    if (localStorage.getItem("email") == this.email) {
      tasks = localStorage.getItem("email");
    }
    else (localStorage.getItem("password") == this.password)
    {
      tasks = localStorage.getItem("password");
    }

    if (this.email == storedEmail && this.password == storedPw)
     {

      alert('Welcome' + localStorage.getItem("name"));
      

    }else
    alert("Error on login");


  }

}
