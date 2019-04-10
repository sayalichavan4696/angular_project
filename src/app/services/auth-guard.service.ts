import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService} from './user.service'
import { style } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _userService:UserService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    let url =state.url;
    let r = route.root
    console.log("root"+r)
    console.log("current url:"+url)
    if(this._userService.isUserLoggedIn())
    {
      console.log("valid Url")
      return true ;
    }else if(this._userService.isUserLoggedIn() ===false){
      console.log("Invalid Url")
      
      this.router.navigate(['login'])
      return false;
    }
    console.log("=>"+route+"=>"+state)
  }
}
