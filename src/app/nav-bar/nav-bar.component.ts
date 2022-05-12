import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../Services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
loggedUser:string;
  constructor(private alertifyservice:AlertifyService) { }

  ngOnInit() {
  }

  loggedIn()
  {
    this.loggedUser=localStorage.getItem('token')
    return this.loggedUser;
  }
  onLogout()
  {
    localStorage.removeItem('token');
    this.alertifyservice.success('you are log out')
  }
}
