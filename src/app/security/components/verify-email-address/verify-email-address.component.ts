import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verify-email-address',
  templateUrl: './verify-email-address.component.html',
  styleUrls: ['./verify-email-address.component.scss']
})
export class VerifyEmailAddressComponent implements OnInit {
 

  constructor(
    public authService: AuthService,
    public router: Router,
   
  ) { }

  ngOnInit(): void {  
  }

  public goToLogin() {
    this.router.navigate(['/sign-in']);
  }
}
