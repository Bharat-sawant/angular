import { Injectable } from '@angular/core';
import { Iuser } from '../model/Iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

addUsers(user: Iuser)
  {
    let users=[];
    if(localStorage.getItem('users'))
    {
      users=JSON.parse(localStorage.getItem('users')||'{}');
      // users=[user,...users]
      users=[...users,user]
    }
    else
    {
      users=[user];
    }
    localStorage.setItem('users',JSON.stringify(users));

  }
}
