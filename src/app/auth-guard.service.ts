import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '../../node_modules/@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService,private router :Router) { }

  canActivate (route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
      let url :string = state.url;
      var flag = this.checkLogin()
      return flag;
        
  }
  checkLogin(){
    if(this.auth.isLoggedIn()){
      return true;
    }
      this.router.navigate(['/login']);

  }

}
