import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  message: string = "Vous êtes déconnecté";
  name: string;
  password: string;
  auth: AuthService;

  constructor(
    private authService: AuthService,
    private router: Router ) {}

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = "Vous êtes connecté"
    } else {
      this.message = "L'identifiant ou le mot de passe est incorrecte"
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours';
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if(isLoggedIn) {
          this.router.navigate(['/restaurant']);
        } else {
          this.password = '';
          this.router.navigate(['/login'])
        }
        
      })
  }

  logout() {
    this.auth.logout();
    this.message = 'Vous êtes déconnecté'
  }

  


}
