import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  constructor(private wishlistservice : WishlistService) { }

  ngOnInit(): void {
    this.wishlistservice.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.wishlistservice.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.wishlistservice.removeWishItem(item);
  }
  emptywishlist(){
    this.wishlistservice.removeAllWishlist();
  }
}
