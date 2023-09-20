import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title: string = 'Login';

  formLogin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  enviarFormulario() {
    console.log(this.formLogin);
    const { username, password } = this.formLogin.value;

    this.authService.login(username, password).subscribe({
      next: (response) => {
        // Handle the response and redirect to the dashboard if successful.
        console.log('Autenticación exitosa', response);
        this.router.navigate(['/dashboard']);
        // Redirect to the dashboard here.
      },
      error: (error) => {
        // Handle authentication errors.
        console.error('Error de autenticación', error);
      },
    });
  }
}
