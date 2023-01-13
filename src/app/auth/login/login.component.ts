import { Component } from '@angular/core';
import { LoginForm } from '../auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Router, RouteReuseStrategy } from '@angular/router';
import { AuthService } from '../auth.service';

;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form:LoginForm={
    email:'',
    password:'',

  };

  constructor(private authService:AuthService ) {}


submit(){
  
  this.authService.login(this.form);
  }
}