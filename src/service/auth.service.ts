import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl ='http://10.10.2.5:3000';

@Injectable({
  providedIn: 'root'
})


export class AuthService {


  constructor(private http:HttpClient){ }

  getAllUsers(){
    return this.http.get(baseUrl+'/user');
  }

  signIn(loginObj:any){
    return this.http.post(baseUrl+'/auth/login',loginObj);
    
  }
  signUp(registerObj:any){
    this.http.post(baseUrl+'/auth/register',registerObj).subscribe((res) =>{
      console.log(res);
    })
    // return this.http.post(baseUrl+'/auth/register',registerObj);
    
  }
}
