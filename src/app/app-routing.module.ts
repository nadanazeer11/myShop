import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'cart',component:CartComponent},
  {path:'confirm',component:ConfirmationPageComponent},
  {path:'details/:id',component:ProductItemDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
