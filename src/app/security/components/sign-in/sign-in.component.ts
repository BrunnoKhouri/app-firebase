import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public loginForm: FormGroup = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required])
  });;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {

  }


  ngOnInit(): void {
    this.loginForm;
  }

  public singIn() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.authService.SignIn(email, password).then(result => result);
  }

  public goToPassword() {
    this.router.navigate(['/forgot-password']);
  }

  public goToRegister() {
    this.router.navigate(['/register-user']);
  }
}
