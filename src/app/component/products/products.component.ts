import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { AuthGuardService } from 'src/app/service/auth-guard.service';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Products: Product[] = [];

  constructor(private api : ApiService, private cartService : CartService,private wishlistService : WishlistService,private _httpClient: HttpClient, private _authGuard: AuthGuardService) { }

  ngOnInit(): void {
    this._httpClient.get<Product[]>(`http://localhost:3000/products`).subscribe(result => {
      this.Products = result;
    },(error) => {});
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
    alert("Product Added to Cart, please check right side icons");
  }
  AddToWish(item: any){
    this.wishlistService.addtoCart(item);
    alert("Product Added to Wishlist, please check right side icons");
  }
  CheckIfAdministrator() {
    if (this._authGuard.Administrator() && this._authGuard.UserSession()) {
      return true;
    } else {
      return false;
    }
  }

}
