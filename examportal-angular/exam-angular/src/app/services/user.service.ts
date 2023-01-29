import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  public addUser(user : any){
    return this.http.post('http://localhost:9000/api/v1/auth/register', user);
  }
}
