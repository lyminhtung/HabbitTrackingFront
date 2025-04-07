import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // LoginComponent,
    // SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LoginFormComponent,
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent,
    SignupFormComponent,
    SocialLoginComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    // LoginComponent,
    // SignupComponent
  ]
})
export class AuthModule { }
