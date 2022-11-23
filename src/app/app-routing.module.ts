import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './security/components/sign-in/sign-in.component';
import { RegisterUserComponent } from './security/components/register-user/register-user.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './security/components/forgot-password/forgot-password.component';
import { VerifyEmailAddressComponent } from './security/components/verify-email-address/verify-email-address.component';
import { AuthGuard } from './security/guards/auth.guard';

const routes: Routes = [
  
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailAddressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
