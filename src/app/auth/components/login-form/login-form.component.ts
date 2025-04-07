import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
  loginForm : FormGroup;
  isSubmitting : false;
  hidePassword : true;

  constructor(
    private fb : FormBuilder,
    private store : Store
  )
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
