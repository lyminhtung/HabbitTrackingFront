// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './auth/pages/signup/signup.component'; 
import { LoginComponent } from './auth/pages/login/login.component';

@NgModule({

  imports: [
    BrowserModule,

    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  providers: [
    provideHttpClient()
  ],
  
})
export class AppModule { }
