import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  User: User = new User();
  constructor(private _httpClient: HttpClient,private _router: Router) { }

  ngOnInit(): void {
  }
  AddUser() {
    this._httpClient.post('http://localhost:3000/users', this.User).subscribe(result => {
      alert('Added Successfully');
      this._router.navigate(['/users']);
    }, (error) => {
    })
  }

}
