// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

export interface SignUpRequest {
  fullName: string;
  email: string;
  password: string;
}

// Export kiểu dữ liệu SignUpResponse để có thể sử dụng ở những nơi khác
export interface SignUpResponse {
  success: boolean;
  message?: string;
  user?: any;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  signUp(userData: SignUpRequest): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(`${this.apiUrl}/signup`, userData);
  }
}
