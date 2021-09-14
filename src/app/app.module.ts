import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { ListofusersComponent } from './component/listofusers/listofusers.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { AdduserComponent } from './component/adduser/adduser.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { CheckoutsuccessComponent } from './component/checkoutsuccess/checkoutsuccess.component';
import { ProddetailsComponent } from './component/proddetails/proddetails.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { LogoutComponent } from './component/logout/logout.component';
import { EditproductComponent } from './component/editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    WishlistComponent,
    ListofusersComponent,
    CheckoutComponent,
    AdduserComponent,
    AddproductComponent,
    CheckoutsuccessComponent,
    ProddetailsComponent,
    UserdetailsComponent,
    LogoutComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
