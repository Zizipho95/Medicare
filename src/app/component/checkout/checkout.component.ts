import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService : CartService) { }

  public totalitems : number = 0;
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalitems = res.length;
    })
  }

}
