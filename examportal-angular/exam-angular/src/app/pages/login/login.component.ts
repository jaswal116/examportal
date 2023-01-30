import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public request={
    email:'',
    password:''
  }

  ngOnInit(): void {
  }

  loginSubmit(){
    console.log(this.request);
    if (this.request.email == "" || this.request.email == null) {
      return alert('Email is required !!');
    }
    if (this.request.password == "" || this.request.password == null) {
      return alert('Password is required !!');
    }

    // call Login : userService
    this.userService.login(this.request.email, this.request.password).toPromise().then(data => {
        console.log(data);
        this.goToHome();
    }).catch(error => {
        console.log(error);
        alert('error happened');
    });
  }

  goToRegister(){
    this.router.navigate(['/signup']);
  }

  goToHome() {
    this.router.navigate(['/home']);
    }

}
