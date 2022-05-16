import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  error ='';
  loading=false;
  isLoggedIn= false;
  isLoginFailed= false;
  roles :string[]=[];


  constructor(private _auth: AuthService,private _router:Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.isLoggedIn =true;
      this.roles=this.tokenStorage.getUser().roles;
    }
  }
  onSubmit():void{
    this.loading = true;
    this.error = '';
    const { email, password } = this.form;
    
      this._auth
        .login( email, password )
        //TODO:
        .subscribe({
          next: data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
    
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            //this.reloadPage();
          },
          error: err => {
            this.error = err.error.message;
            this.isLoginFailed = true;
          }
         });
    }
  
  /*canSubmit():boolean{
  return this.form.length > 0 && password.length > 0;
}*/

}
