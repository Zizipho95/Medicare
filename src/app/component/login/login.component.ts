import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  UserSession:User = new User();
  constructor(private _httpClient: HttpClient,private _router: Router) { }

  ngOnInit(): void {
  }
  Login() {
    this._httpClient.get<User[]>(`http://localhost:3000/users`).subscribe(result => {
      var user__ = result.find(x => x.Email === this.user.Email && x.Password === this.user.Password);
      console.log(user__);
      if(user__ != null){
        localStorage.setItem('Administrator', user__.UserRole);
        localStorage.setItem('UserSession', 'true');
        this._router.navigate(['/products']);
      }
     },(error) => {console.log(error);});
  }
}
