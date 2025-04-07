// app-routing.module.ts
import { Route } from '@angular/router';
import { SignupComponent } from './auth/pages/signup/signup.component'; // Đảm bảo bạn import đúng component

export const routes: Route[] = [
  { path: 'register', component: SignupComponent },  // Đăng ký route cho trang đăng ký
];
