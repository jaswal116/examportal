import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService implements HttpInterceptor {

  private accessToken: string ='';

  constructor(private http: HttpClient) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers.set('Authorization', 'Bearer ' + this.accessToken);
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }

  // Send a request to get JWT token
  public login(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>('http://localhost:9000/api/v1/auth/authenticate', { email, password }, httpOptions);
  }

  // Send a request to register a new user and get JWT token
  public addUser(user : any){
    return this.http.post('http://localhost:9000/api/v1/auth/register', user);
  }

  // Store the JWT token after the user logs in
  public setAccessToken(token: string): void {
    this.accessToken = token;
  }

  // Retrieve the JWT token
  public getAccessToken(): string {
    return this.accessToken;
  }

  // Check if the user is logged in
  public isLoggedIn(): boolean {
    return this.accessToken ? true : false;
  }
}
