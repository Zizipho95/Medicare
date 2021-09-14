import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { item } from '../../models/item';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  Product: item = new item();
  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  SaveProduct() {
    this._httpClient.post('http://localhost:3000/products', this.Product).subscribe(result => {
      this._router.navigate(['/products']);
    }, (error) => {
    })
  }
}
