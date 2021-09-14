import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { AdduserComponent } from './component/adduser/adduser.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { CheckoutsuccessComponent } from './component/checkoutsuccess/checkoutsuccess.component';
import { EditproductComponent } from './component/editproduct/editproduct.component';
import { ListofusersComponent } from './component/listofusers/listofusers.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ProddetailsComponent } from './component/proddetails/proddetails.component';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from './component/register/register.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'adduser', component: AdduserComponent},
  {path:'addproduct', component: AddproductComponent},
  {path:'checkoutsuccess', component: CheckoutsuccessComponent},
  {path:'users', component: ListofusersComponent},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
  {path:'proddetails/:id', component: ProddetailsComponent},
  {path:'register', component: RegisterComponent},
  {path:'userdetails/:id', component: UserdetailsComponent},
  {path:'wishlist', component: WishlistComponent},
  {path:'editproduct/:id',component:EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
