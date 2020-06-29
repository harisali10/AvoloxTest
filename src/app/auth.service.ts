import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelper } from 'angular-jwt'
    import { catchError } from 'rxjs/operators'
    import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private readonly _userRegistrationUrl :string ="http://localhost:8082/api/signUp";
private readonly _userLoginUrl :string ="http://localhost:8082/api/signIn";
private readonly _userEmail :string ="http://localhost:8082/api/usename";

private readonly _checkSymbol :string ="https://api.binance.com/api/v1/ticker/price?symbol=";
private readonly _testLink :string ="https://api.binance.com/api/v1/ticker/allPrices";

  constructor(private http: HttpClient) { }


  getSymbolData(){
    return this.http.get(this._testLink)
  }
  checkSymbol<T>(data){
    return this.http.get(this._checkSymbol+""+data)
  }
  registerUser<T>(data){
      return this.http.post(this._userRegistrationUrl,data)
  }
  getEmail<T>(data){
    return this.http.post(this._userEmail,data)
}
  loginUser<T>(data){
    return this.http.post(this._userLoginUrl,data)
    
}
handleError(error: HttpErrorResponse){
    return throwError(error);
  }

isLoggedIn(){
  console.log(localStorage.key)
  console.log(localStorage);
  if(localStorage.length>=0){
    return true;   
  }
  
}

// get isLoggedIn(): boolean{
//   return this.currentUser != null
// }


}