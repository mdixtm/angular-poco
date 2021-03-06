import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartService } from './cart-service';

@NgModule({
  imports: [
    CommonModule,
  ],

  exports: [
    CartComponent
  ],

  declarations: [
    CartComponent
  ],

  providers: [
    CartService
  ]
})
export class CartModule { }