import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  constructor() { }

  nameMessage = "";
  emailMessage = "";
  passwordMessage = "";
  cpasswordMessage = "";

  name = "";
  email = "";
  password = "";
  cpassword = "";

  register() {
    this.nameMessage = "";
    this.emailMessage = "";
    this.passwordMessage = "";
    this.cpasswordMessage = "";

    if (this.name.trim() == "") {
      this.nameMessage = "Please Enter name";
    }

    if (this.email.trim() == "") {
      this.emailMessage = "Please Enter email";
    }

    if (this.name.trim() == "") {
      this.nameMessage = "Please Enter name";
    }

    if (this.password.trim() == "") {
      this.passwordMessage = "Please Enter password";
    }


    if (this.cpassword.trim() == "") {
      this.cpasswordMessage = "Please Enter Confirm password";
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
    else if(!pwdExpression.test(String(this.cpassword).toLowerCase()))
    
      {
        this.cpasswordMessage = "Enter confirm Password";
    }
    
    
    localStorage.setItem("name", this.name);
    localStorage.setItem("email", this.email);
    localStorage.setItem("password", this.password);
    

  }

}
