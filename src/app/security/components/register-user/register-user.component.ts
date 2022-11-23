import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router

  ) { }

  ngOnInit(): void {
  }


  public goTologin() {
    this.router.navigate(['/sign-in']);
  }
}
