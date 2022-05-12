import { Injectable } from '@angular/core';
import { Iuser } from '../model/Iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }


authUser(user:Iuser )
{
  let UserArray=[];
  if(localStorage.getItem('users'))
  {
    UserArray=JSON.parse(localStorage.getItem('users'))

  }
  return UserArray.find((p: { userName: string; password: string; })=>p.userName==user.userName && p.password==user.password)

}

}
