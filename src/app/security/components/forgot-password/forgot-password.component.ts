import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public loginForm: FormGroup = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email])
  });;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    let email = this.loginForm.value.email;
    this.authService.ForgotPassword(email).then(result => result);
  }

  public goToLogin() {
    this.router.navigate(['/sign-in']);
  }
}
