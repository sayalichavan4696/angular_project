import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isValidUser: boolean = true
  constructor() { }
  authUser(username: string, password: string):any {
    if (username == 'admin' && password == '@dmin') {
      this.isValidUser = true;
    }
    else {
      this.isValidUser = false
    }
  }
  isUserLoggedIn() {
    return this.isValidUser

  }
}








