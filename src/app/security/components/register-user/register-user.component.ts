import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  public loginForm: FormGroup = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required])
  });;

  constructor(
    public authService: AuthService,
    public router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm;
  }

  public singUp() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.authService.SignUp(email, password).then(result => result);
  }

  public goTologin() {
    this.router.navigate(['/sign-in']);
  }
}
