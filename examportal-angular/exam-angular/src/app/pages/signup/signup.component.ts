import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public user={
    email:'',
    password:'',
    firstName:'',
    lastName:'',
    phone:''
  }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if (this.user.email == "" || this.user.email == null) {
      return alert('Email is required !!');
    }

    // call addUser : userService
    this.userService.addUser(this.user).toPromise().then(data => {
        console.log(data);
        this.goToLogin();
    }).catch(error => {
        console.log(error);
        alert('error happened');
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
    }

}
