import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,AbstractControl,ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  submitted = false;
  isLoading = false;
  errorMessage = '';
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email:['',[Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]],
      })
  }
  getControl(controlName: string):AbstractControl | null{
    return this.loginForm.get(controlName)
  }
  onSubmit(): void{
    this.submitted = true;
    this.errorMessage='';
    if(this.loginForm.invalid){
      return;
    }
    this.isLoading = true;
    console.log('Form Submitted:', this.loginForm.value);
    setTimeout(()=>{
      this.isLoading = false;
    },1000)
  }
}
