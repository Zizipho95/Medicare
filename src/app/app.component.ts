import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';
import { CartService } from './service/cart.service';
import { WishlistService } from './service/wishlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'add-to-cart';

  public totalItem : number = 0;
  public wishlisttotalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService : CartService,private wishlistService : WishlistService,private _authGuard: AuthGuardService,private _router: Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

    this.wishlistService.getProducts()
    .subscribe(res=>{
      this.wishlisttotalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  CheckIfAdministrator() {
    if (this._authGuard.Administrator() && this._authGuard.UserSession()) {
      return true;
    } else {
      return false;
    }
  }

  CheUserSession() {
    if (this._authGuard.UserSession()) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this._authGuard.logout();
    this._router.navigate(['/login']);
  }
}
