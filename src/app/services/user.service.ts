import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { element } from '@angular/core/src/render3';
import {HttpClient} from '@angular/common/http'
import {User} from './user'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isValidUser: boolean = false;
  private url ="../assets/userdata.json"
  constructor(private http:HttpClient) { }
  getUsers():Observable<User[]>{
    
   return this.http.get<User[]>(this.url)
  }
  // authUser(username:any, password: string) {
  //    this.getUsers().subscribe(users=>{
  //     let user = users.find(user=> (user.username ===username && user.password === password))
  //     console.log(user)
  //     if(user){
  //       console.log("In if")
  //       this.isValidUser = true;
  //     }
  //     else {
  //       console.log("in else")
  //       this.isValidUser = false;
  //       //return false;
  //     }
  //     console.log("=>"+this.isValidUser)
  //     return this.isValidUser
  //   });
    
  //  }
  authUser(username:string,password:string){
    if(username === "admin" && password ==="admin"){
      this.isValidUser = true;
    }
    else{
      this.isValidUser = false;
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








