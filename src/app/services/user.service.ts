import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isValidUser: boolean = false
  constructor() { }
  authUser(username:any, password: string):any {
    console.log("Username:"+username +" "+"password"+password)
    if (username == 'admin' && password == 'admin') {
      this.isValidUser = true;
      //return true;
    }
    else {
      this.isValidUser = false;
      //return false;
    }
    return this.isValidUser
  }
  isUserLoggedIn() {
    return this.isValidUser

  }
  isUserLoggedOut(){
    this.isValidUser = false;

  }
}








