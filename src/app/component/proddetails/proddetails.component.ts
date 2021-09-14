import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/service/api.service';
import { AuthGuardService } from 'src/app/service/auth-guard.service';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.scss']
})
export class ProddetailsComponent implements OnInit {

  id: any;
  product: Product = new Product();

  constructor(private productServ: ApiService,
    private _route: ActivatedRoute,private __router: Router,private _httpClient: HttpClient,private _authGuard: AuthGuardService) { }

    ngOnInit(): void {
      this.id = this._route.snapshot.paramMap.get('id');
      this.productServ.getProductByID(this.id).subscribe(result => {
        this.product = result;
      }, error => {
      });
    }
    CheckIfAdministrator() {
      if (this._authGuard.Administrator() && this._authGuard.UserSession()) {
        return true;
      } else {
        return false;
      }
    }

  deleteProduct() {
    this._httpClient.delete('http://localhost:3000/products/' + this.id).subscribe(result => {
      alert('Deleted Successfully.');
      console.log(result);
      this.__router.navigate(['/products']);
    }, (error) => {
    });
  }

}
