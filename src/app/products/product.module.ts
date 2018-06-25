import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent}  from './products.component';
import { ProductsService } from './products-service';
import { ProductDetailComponent } from './product-detail.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent},
      { path: 'productDetails/:productId',
         component: ProductDetailComponent },
    ])
  ],

  declarations: [
     ProductsComponent,
     ProductDetailComponent
  ],

  providers: [
    ProductsService
  ]
})
export class ProductsModule { 
  pageTitle="All products"
}
