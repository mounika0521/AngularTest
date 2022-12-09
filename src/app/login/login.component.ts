import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginForm = new FormGroup({
    user : new FormControl("", Validators.required),
password : new FormControl("", Validators.required),
rememberPassword : new FormControl()
  })
loginUser(){
  console.log(this.loginForm.value)
}
  ngOnInit(): void {
  }

}
