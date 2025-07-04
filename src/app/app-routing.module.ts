// app-routing.module.ts
import { Route } from '@angular/router';
import { SignupComponent } from './auth/pages/signup/signup.component'; // Đảm bảo bạn import đúng component
import { LoginComponent } from './auth/pages/login/login.component';
import { HomeComponent } from './auth/pages/home/home.component';
import { ContactComponent } from './auth/pages/contact/contact.component';

export const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: HomeComponent }, // Temporary - you can create separate components later
  { path: 'portfolio', component: HomeComponent }, // Temporary - you can create separate components later
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }
];
