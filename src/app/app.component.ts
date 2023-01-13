import { Component, OnInit } from '@angular/core'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase.config'
import { AuthService } from "./auth/auth.service";
import { ActivatedRoute, Route } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    isLoggedIn: boolean = false;
    i:number=0;
    constructor(private authService: AuthService ) { }
    ngOnInit(): void {

     
        this.isLoggedIn = localStorage.getItem('user') ? true : false;
        initializeApp(firebaseConfig);
}
    
    isAuthenticated() {
        return this.authService.isAuthenticated;
    }

    logout() {
        this.isLoggedIn = false;
        this.authService.logout();
    }
}