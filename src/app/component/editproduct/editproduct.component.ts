import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/service/api.service';
import { AuthGuardService } from 'src/app/service/auth-guard.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  id: any;
  product: Product = new Product();
  constructor(private _prod_serv: ApiService,private _route: ActivatedRoute,private __router: Router,private _httpClient: HttpClient,private _authGuard: AuthGuardService ) { }
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._prod_serv.getProductByID(this.id).subscribe(result => {
      this.product = result;
    }, error => {
    });
  }
  UpdateProduct() {
    this._httpClient.put('http://localhost:3000/products/' + this.id,this.product).subscribe(result => {
      alert('Updated Successfully');
      this.__router.navigate(['/products']);
    }, (error) => {
    });
  }
}
