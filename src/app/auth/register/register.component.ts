import { Component } from '@angular/core';
import { RegisterForm } from '../auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: ''
  };
  constructor(private authService:AuthService) { }

  submit() {
  
  this.authService.register(this.form);
}
}
