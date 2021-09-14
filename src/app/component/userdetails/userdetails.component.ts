import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  id: any;
  User: any;

  constructor(private _httpClient: HttpClient,private _router: Router, private _active_route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._active_route.snapshot.paramMap.get('id');
    this._httpClient.get('http://localhost:3000/users/' + this.id)
      .subscribe(result => {
        this.User = result;
      }, (error) => {
      });
  }
  UpdateUser() {
    this._httpClient.put('http://localhost:3000/users/' + this.id,this.User).subscribe(result => {
      alert('Updated Successfully');
      this._router.navigate(['/users']);
    }, (error) => {
    });
  }

}
