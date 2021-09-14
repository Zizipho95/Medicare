import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }

  public wishItemList : any =[]
  public productwishList = new BehaviorSubject<any>([]);
  public wishlistsearch = new BehaviorSubject<string>("");

  getProducts(){
    return this.productwishList.asObservable();
  }

  setProduct(product : any){
    this.wishItemList.push(...product);
    this.productwishList.next(product);
  }
  addtoCart(product : any){
    this.wishItemList.push(product);
    this.productwishList.next(this.wishItemList);
    this.getTotalPrice();
    console.log(this.wishItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.wishItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeWishItem(product: any){
    this.wishItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.wishItemList.splice(index,1);
      }
    })
    this.productwishList.next(this.wishItemList);
  }
  removeAllWishlist(){
    this.wishItemList = []
    this.productwishList.next(this.wishItemList);
  }
}
