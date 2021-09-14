import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 
  user: User = new User();
  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  Register() {
   this.user.UserRole = "Administrator";
    this._httpClient.post('http://localhost:3000/users', this.user).subscribe(result => {
      alert('Registration Successful');
      this._router.navigate(['/login']);
    }, (error) => {
      console.log(error);
    })
  }
}
