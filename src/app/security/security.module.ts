import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailAddressComponent } from './components/verify-email-address/verify-email-address.component';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    SignInComponent,
    RegisterUserComponent,
    ForgotPasswordComponent,
    VerifyEmailAddressComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [AuthService],
})
export class SecurityModule { }
