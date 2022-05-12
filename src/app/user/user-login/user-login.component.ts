import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService
    , private alertifyService:AlertifyService
    , private router:Router) { }

  ngOnInit() {
  }

  onLogin(loginForm:NgForm)
  {
  console.log(loginForm.value)
const token= this.authService.authUser(loginForm.value);

if(token)
{
  localStorage.setItem('token',token.userName)
  this.alertifyService.success("login successfull");
  this.router.navigate(['/']);
}
else{
 this.alertifyService.error('login failed')
}
  }

}
