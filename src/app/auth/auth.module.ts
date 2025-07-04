import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
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
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: []
})
export class AuthModule { }
