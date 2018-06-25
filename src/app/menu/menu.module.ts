import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu-service';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products/:categoryId',
      component: ProductsComponent },
    ])
  ],

  exports: [
    MenuComponent
  ],

  declarations: [
    MenuComponent
  ],

  providers: [
    MenuService
  ]
})
export class MenuModule { }