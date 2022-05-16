import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/app/_services/auth.service';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    
  };
  confirmPassword = '';
  errorMessage = '';
  loading = false;
  isSuccessful = false;
  isSignUpFailed = false;
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const { username, email, password } = this.form;

    this._auth.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  /*canSubmit(): boolean {
    return this.fullName && this.email && this.password && this.confirmPassword
      ? true
      : false;
  }*/

}
