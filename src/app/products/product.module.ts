import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent}  from './products.component';
import { ProductsService } from './products-service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent}
    ])
  ],

  declarations: [
     ProductsComponent
  ],

  providers: [
    ProductsService
  ]
})
export class ProductsModule { 
  pageTitle="All products"
}
